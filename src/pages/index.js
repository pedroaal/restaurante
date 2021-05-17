import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import {useState, useEffect} from 'react';
import {dbConnect, jsonify } from '@/util/dbConnect';
import { signIn, signOut, useSession } from 'next-auth/client';
import { Button } from '@chakra-ui/button';

export async function getServerSideProps(context) {
  // await dbConnect();
  
  // const products = await Product.find({}).exec();

  return {
    props: {
      // products: jsonify(products),
    }
  }
}

export default function Home({}) {
  // const [asyncUsers, setAsyncUsers] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetch('/api/users')
  //     .then(res => res.json())
  //     .then(json => {
  //       setAsyncUsers(json);
  //       setLoading(false);
  //     })
  //   }, 1000);
  // }, [])

  const [ session, loading ] = useSession();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
        {!session && 
          <>
            <Button onClick={() => signIn()}>Iniciar Sesión</Button>
          </>
        }
        {session && 
          <>
            Bienvenido {session.user.email} <br/>
            <Button onClick={() => signOut()}>Cerrar Sesión</Button>
          </>
        }        
      </main>

    </div>
  )
}