import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import {useState, useEffect} from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';
import { Button, Flex } from '@chakra-ui/react';
import { Skeleton, SkeletonCircle, SkeletonText, VStack } from "@chakra-ui/react"
import { SimpleGrid } from "@chakra-ui/react"
import { Image, Text, Box } from "@chakra-ui/react"
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

export default function Home() {
  const [ session ] = useSession();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch('/api/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        setLoading(false);
      })
    }, 1000);
  }, [])

  const skeleton = () => (
    <Box bg="tomato" height="80px">
      <Skeleton height="60px" />
      <Skeleton height="20px" />
    </Box>
  );

  const makeProd = (product) => (
    <Box bg="tomato" height="80px">
      <Image src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
      <Text>Hola</Text>
    </Box>
  );

  return (
    <>
      <Head>
        <title>Menú</title>
      </Head>

      <VStack p={6} justify-conten='space-between' alignItems='center' w='full'>
        <VStack>
          <Nav />
          <Categories />
          <SimpleGrid flex='1' columns={2} spacingX="40px" spacingY="20px">
            {loading ? skeleton : products.map(prod => makeProd(prod)) }
          </SimpleGrid>
        </VStack>
        <Footer />
      </VStack>
    </>
  )
}