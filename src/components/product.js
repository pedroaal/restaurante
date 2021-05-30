import {Box, Flex} from '@chakra-ui/layout';
import React, {useState, useEffect} from 'react';

export async function getServerSideProps(context) {
  return {
    props: {
    }
  }
}

export default function product() {
  const initialState = {
    store_id: '',
    category_id: '',
    name: '',
    description: '',
    img: '',
    iva: '',
    price: '',
    type: '',
    stock: '',
    sort: '',
  }
  const [product, setProduct] = useState(initialState);
  
  // useEffect(() => {
  //   setTimeout(() => {
  //     
  //   }, 1000);
  // }, [])

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={product.img} alt={product.name} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            $ {product.price}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {product.name}
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {product.description}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}