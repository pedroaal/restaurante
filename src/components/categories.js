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
    const {data} = await api.get('products/getCategories');
    setCategories(data);
  }, [])

  return (
    <Flex width="100vw" minH='40px' px={6} alignItems='center' border='1px solid orange' justifyContent='space-around'>
      {categories.map((cat) => (
        <h3 key={cat._id}>{cat.name}</h3>
      ))}
    </Flex>
  )
}