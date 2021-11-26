import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { baseAPI } from '@config/api';
// import { signIn, signOut, useSession, getCsrfToken } from 'next-auth/client';
import { getCsrfToken } from 'next-auth/client';
import Router from 'next/router';

import { toast } from 'react-toastify';

import Button from '@atoms/button';

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context)
  return {
    props: { csrfToken }
  }
}

export default function Signin({ csrfToken }) {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password_confirmation: '',
  }
  const [user, setUser] = useState(initialState);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  const handleSubmit = async event => {
    event.preventDefault();
    const url = `${baseAPI}user/create`;

    const response = await toast.promise(
      fetch(url, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
      })
        .then(res => {
          console.log(res.data);
          setUser({ ...initialState });
          return Router.push('/auth/signin')
        }),
      {
        pending: 'Creando usuario...',
        success: 'Usuario creado',
        error: 'No hemos podido crear tu usuario'
      }
    )
    console.log(response);
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
            <label className="form-label" htmlFor="firstName">Nombre</label>
            <input className="form-input" id="firstName" name="firstName" type="text" onChange={handleInput} value={user.firstName} />
          </div>
          <div className="my-2">
            <label className="form-label" htmlFor="lastName">Apellido</label>
            <input className="form-input" id="lastName" name="lastName" type="text" onChange={handleInput} value={user.lastName} />
          </div>
          <div className="my-2">
            <label className="form-label" htmlFor="email">Email</label>
            <input className="form-input" id="email" name="email" type="email" onChange={handleInput} value={user.email} />
          </div>
          <div className="my-2">
            <label className="form-label" htmlFor="password">Confirmar contraseña</label>
            <input className="form-input" id="password" name="password" type="password" onChange={handleInput} value={user.password} />
            <p className="text-red text-xs italic">Please choose a password.</p>
          </div>
          <div className="my-2">
            <label className="form-label" htmlFor="password_confirmation">Contraseña</label>
            <input className="form-input" id="password_confirmation" name="password_confirmation" type="password" onChange={handleInput} value={user.password_confirmation} />
            <p className="text-red text-xs italic">Please choose a password.</p>
          </div>
          <div>
            <Button className="w-full mx-0" type="submit">
              Registrarse
            </Button>
            <Link href='/auth/signin' className='w-full'>Iniciar sesión</Link>
          </div>
        </form>
      </main>
    </div>
  )
}