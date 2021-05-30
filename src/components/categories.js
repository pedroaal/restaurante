import {Box, Flex} from '@chakra-ui/layout';
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
    const categories = await api.get('products/getCategories');
    console.log(categories);
  }, [])

  return (
    <Flex width="100vw" minH='40px' px={6} alignItems='center' border='1px solid orange' justifyContent='space-around'>
      <h3>Cat 1</h3>
      <h3>Cat 2</h3>
      <h3>Cat 3</h3>
    </Flex>
  )
}