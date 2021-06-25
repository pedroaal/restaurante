import Icon from '@chakra-ui/icon';
import { LinkIcon } from '@chakra-ui/icons';
import {Box, Flex} from '@chakra-ui/layout';
import { Grid, GridItem } from "@chakra-ui/react"
import React, {useState, useEffect} from 'react';
import { BiCartAlt, BiBarcodeReader } from "react-icons/bi";
import Link from 'next/link';

export async function getServerSideProps(context) {
  return {
    props: {
    }
  }
}

export default function Footer() {
  return (
    <Flex justifyContent='space-around' direction='row'>
      <Link href="/">
        <Flex direction='column'>
          <Icon as={BiBarcodeReader}>QR scaner</Icon>
          <h1>QR scaner</h1>
        </Flex>
      </Link>
      <Link href='/'>
        <Flex direction='column'>
          <Icon as={BiCartAlt}></Icon>
          <h1>Carrito</h1>
        </Flex>
      </Link>
    </Flex>
  )
}