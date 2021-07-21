import Head from 'next/head';
import {useState, useEffect} from 'react';
import {signIn, getCsrfToken} from 'next-auth/client';
import {Button, Flex, Heading, Input} from '@chakra-ui/react';

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context)
  return {
    props: { csrfToken }
  }
}

export default function Signin({csrfToken}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sign In</title>
      </Head>

      <main className={styles.main}>
        <Flex height='100vh' alignItems='center' justifyContent='center'>
          <Flex direction='column' background='gray.100' p={5} rounded={6}>
            <Heading mb={6}>Iniciar Sesión</Heading>
            <form method='post' action='/api/auth/callback/credentials'>
              <Input type='hidden' name='csrfToken' defaultValue={csrfToken}/>
              <Input type='email' name='email' placeholder='Email' variant='filled' mb={3} />
              <Input type='password' name='password' placeholder='Contraseña' variant='filled' mb={3} />
              <Button type="submit" colorScheme='teal'>Iniciar Sesión</Button>
            </form>   
          </Flex>
        </Flex>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}