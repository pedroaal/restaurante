import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getCsrfToken } from 'next-auth/client';
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
        // toast({
        //   title: "Account created.",
        //   description: "We've created your account for you.",
        //   status: "success",
        //   duration: 5000,
        //   isClosable: true,
        // });
        setUser({...initialState});
        setLoading(false);
        return res.data;
      })
      .catch(err => {
        console.log(err);
        // toast({
        //   title: "Oops",
        //   description: "No hemos podido crear tu cuenta.",
        //   status: "error",
        //   duration: 5000,
        //   isClosable: true,
        // });
        setLoading(false);
        return null;
      });
    return;
  }

  return (
    <div className='screen-centered'>
      <Head>
        <title>Sign In</title>
      </Head>

      <main className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col'>
        <h1 className='mb-2'>Registro</h1>
        <form method='post' onSubmit={handleSubmit}>
          <input type="hidden" name='csrfToken' value={csrfToken} />
          <div className="my-2">
            <label className="form-label" for="firstName">Nombre</label>
            <input className="form-input" id="firstName" name="firstName" type="text" onChange={handleInput} value={user.firstName} />
          </div>
          <div className="my-2">
            <label className="form-label" for="lastName">Apellido</label>
            <input className="form-input" id="lastName" name="lastName" type="text" onChange={handleInput} value={user.lastName} />
          </div>
          <div className="my-2">
            <label className="form-label" for="email">Email</label>
            <input className="form-input" id="email" name="email" type="email" onChange={handleInput} value={user.email} />
          </div>
          <div className="my-2">
            <label className="form-label" for="password">Confirmar contraseña</label>
            <input className="form-input" id="password" name="password" type="password" onChange={handleInput} value={user.password} />
            <p className="text-red text-xs italic">Please choose a password.</p>
          </div>
          <div className="my-2">
            <label className="form-label" for="password_confirmation">Contraseña</label>
            <input className="form-input" id="password_confirmation" name="password_confirmation" type="password" onChange={handleInput} value={user.password_confirmation} />
            <p className="text-red text-xs italic">Please choose a password.</p>
          </div>
          <div className="flex items-center justify-between">
            <button className="btn bg-black hover:bg-gray text-white w-full mx-0" type="submit">
              {loading ? 'Creando' : 'Registrarse'}
            </button>
          </div>
        </form>   
      </main>

      <footer className=''>
      </footer>
    </div>
  )
}