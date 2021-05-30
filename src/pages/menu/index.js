import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import {useState, useEffect} from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';
import { Button, Flex } from '@chakra-ui/react';
import Nav from '@/components/header';
import Footer from '@/components/footer';
import Categories from '@/components/categories';

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
    <>
      <Head>
        <title>Menú</title>
      </Head>

      <Flex height='100vh' width='100vw' direction='column' border="1px solid red">
        <Nav />
        <Categories />
        <Footer />
      </Flex>
    </>
  )
}