import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';
import QR from '@molecules/qr';
import Button from '@atoms/button';

export default function Home() {

  const [session, loading] = useSession();
  const a = process.env.APP_URL
  console.log(a);

  return (
    <div className='screen-centered'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=''>
        <QR />
        {!session &&
          <Button title='Iniciar Sesión' action={signIn} />
        }
        {session &&
          <>
            <h3 className='mx-auto text-center'>
              Bienvenido {session.user.email} <br />
            </h3>
            <Button title='Cerrar Sesión' action={signOut} />
          </>
        }
        <Link href="/menu">
          <button className="btn bg-black text-white mx-auto" type="submit">Menú</button>
          {/* <Button title='Menú' type='submit' /> */}
        </Link>
        <p>{ }</p>
      </main>
    </div>
  )
}