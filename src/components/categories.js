import {Box, Flex} from '@chakra-ui/layout';
import { Heading } from "@chakra-ui/react"
import React, {useState, useEffect} from 'react';
import api from '@/config/api';

export async function getServerSideProps(context) {
  return {
    props: {
    }
  }
}

export default function Categories() {
  const [categories, setCategories] = useState([]);
  
  useEffect(async () => {
    const {data} = await api.get('products/getCategories');
    setCategories(data);
  }, [])

  const filterProducts = (key) => {
    console.log(key);
  }

  return (
    <Flex width="100vw" minH='40px' px={6} alignItems='center' border='1px solid orange' justifyContent='space-around'>
      {categories.map((cat) => (
        <Heading as="h4" key={cat._id} onClick={() => filterProducts(cat._id)}>{cat.name}</Heading>
      ))}
    </Flex>
  )
}