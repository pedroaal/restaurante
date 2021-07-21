import Head from 'next/head';
import Image from 'next/image';
import {useState, useEffect} from 'react';
import {signIn, signOut, useSession, getCsrfToken} from 'next-auth/client';
import {Button, Flex, Heading, Input, useToast} from '@chakra-ui/react';
import api from '@/config/api';

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context)
  return {
    props: { csrfToken }
  }
}

export default function Signin({csrfToken}) {
  const [loading, setLoading] = useState(false);
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password_confirmation: '',
  }
  const [user, setUser] = useState(initialState);
  const toast = useToast();

  const handleInput = (event) => {
    const {name, value} = event.target;
    setUser({...user, [name]: value});
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const url = 'user/create';
    await api
      .post(url, user)
      .then(res => {
        console.log(res.data);
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setUser({...initialState});
        setLoading(false);
        return res.data;
      })
      .catch(err => {
        console.log(err);
        toast({
          title: "Oops",
          description: "No hemos podido crear tu cuenta.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        setLoading(false);
        return null;
      });
    return;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Sign In</title>
      </Head>

      <main className={styles.main}>
        <Flex height='100vh' alignItems='center' justifyContent='center'>
          <Flex direction='column' background='gray.100' p={5} rounded={6}>
            <Heading mb={6}>Registro</Heading>
            <form method='post' onSubmit={handleSubmit}>
              <Input type='hidden' name='csrfToken' defaultValue={csrfToken}/>
              <Input type='text' name='firstName' placeholder='Nombre' variant='filled' mb={3} onChange={handleInput} value={user.firstName} />
              <Input type='text' name='lastName' placeholder='Apellido' variant='filled' mb={3} onChange={handleInput} value={user.lastName} />
              <Input type='email' name='email' placeholder='Email' variant='filled' mb={3} onChange={handleInput} value={user.email} />
              <Input type='password' name='password' placeholder='Contraseña' variant='filled' mb={3} onChange={handleInput} value={user.password} />
              <Input type='password' name='password_confirmation' placeholder='Confirmar contraseña' variant='filled' mb={3} onChange={handleInput} value={user.password_confirmation} />
              <Button type="submit" colorScheme='teal' isLoading={loading} loadingText="Creando">Registrarse</Button>
            </form>   
          </Flex>
        </Flex>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}