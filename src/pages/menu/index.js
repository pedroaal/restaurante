import Head from 'next/head';
import {useState, useEffect} from 'react';
import { useSession } from 'next-auth/client';
import { Button, Flex, Spacer } from '@chakra-ui/react';
import { Skeleton, SkeletonText, VStack } from "@chakra-ui/react"
import { SimpleGrid } from "@chakra-ui/react"
import { Image, Text, Box } from "@chakra-ui/react"
import Nav from '@/components/header';
import Categories from '@/components/categories';
import { connect } from 'react-redux';
import { setProducts } from '@/actions';

const myLoader = (src) => {
  return `http://127.0.0.1:3000/${src}`
}

export async function getServerSideProps(context) {
  // await dbConnect();
  
  // const products = await Product.find({}).exec();

  return {
    props: {
      // products: jsonify(products),
    }
  }
}

const Home = ({products}) => {
  const [ session ] = useSession();
  const [loading, setLoading] = useState(true);
  // const [products, setProducts] = useState();

  const saveProducts = () => {
    fetch('/api/products')
      .then(res => res.json())
      .then(json => {
        props.setProducts(json);
        setLoading(false);
      })
  }

  if(products.isEmpty()){
    saveProducts()
  }

  const skeleton = () => (
    <Box bg="tomato" height="80px">
      <Skeleton height="60px" />
      <Skeleton height="20px" />
    </Box>
  );

  const makeProd = (product) => (
    <Box p={4} height="80px">
      <Image
        src={myLoader(product.img)}
        alt={product.name}
      />
      <Flex>
        <Text>{product.name}</Text>
        <Spacer />
        <Text>{product.price}</Text>
      </Flex>
    </Box>
  );

  return (
    <>
      <Head>
        <title>Menú</title>
      </Head>

      <VStack justify-conten='space-between' alignItems='center' w='full'>
          <Nav />
          <Categories />
          <SimpleGrid flex='1' columns={2} spacingX="40px" spacingY="20px">
            {loading ? skeleton : products.map(prod => makeProd(prod)) }
          </SimpleGrid>
        {/* <Footer /> */}
      </VStack>
    </>
  )
}

const mapStateToProps = state => {
  return {
    products: state.products_filtered
  }
}

const mapDispatchToProps = {
  setProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);