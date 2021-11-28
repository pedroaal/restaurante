import Head from 'next/head';
import Link from 'next/link';
import { baseAPI } from '@config/api';
// import { signIn, getCsrfToken } from 'next-auth/client';
import { getCsrfToken } from 'next-auth/client';

import Button from '@atoms/button';

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context)
  return {
    props: { csrfToken }
  }
}

const Signin = ({ csrfToken }) => {
  return (
    <div className='screen-centered'>
      <Head>
        <title>Sign In</title>
      </Head>

      <main className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col'>
        <h1 className='mb-2'>Iniciar Sesión</h1>
        <form method='post' action={`${baseAPI}auth/callback/credentials`}>
          <input type="hidden" name='csrfToken' value={csrfToken} />
          <div className="my-2">
            <label className="form-label" for="email">Email</label>
            <input className="form-input" id="email" name="email" type="text" />
          </div>
          <div className="my-2">
            <label className="form-label" for="password">Contraseña</label>
            <input className="form-input" id="password" name="password" type="password" />
            <p className="text-red text-xs italic">Please choose a password.</p>
          </div>
          <div>
            <Button className="w-full mx-0" type="submit">
              Iniciar Sesión
            </Button>
            {/* <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
              Forgot Password?
            </a> */}
            <Link href='/auth/signup' className='w-full'>Crear cuenta</Link>
          </div>
        </form>
      </main>
    </div>
  )
}

export default Signin