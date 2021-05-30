import Icon from '@chakra-ui/icon';
import {Box, Flex} from '@chakra-ui/layout';
import { Grid, GridItem } from "@chakra-ui/react"
import React, {useState, useEffect} from 'react';
import { BiCartAlt, BiBarcodeReader } from "react-icons/bi";

export async function getServerSideProps(context) {
  return {
    props: {
    }
  }
}

export default function Footer() {
  return (
    <Grid border='1px solid blue' minH="60px" templateColumns='repeat(2, 1fr)' bottom='0px'>
      <Flex alignItems='center' justifyContent='center' direction='column'>
        <Icon as={BiBarcodeReader}></Icon>
        <h1>QR scaner</h1>
      </Flex>
      <Flex alignItems='center' justifyContent='center' direction='column'>
        <Icon as={BiCartAlt}></Icon>
        <h1>Carrito</h1>
      </Flex>
    </Grid>
  )
}