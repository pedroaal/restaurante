import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import {Box, Flex} from '@chakra-ui/layout';
import React, {useState, useEffect} from 'react';

export async function getServerSideProps(context) {
  return {
    props: {
    }
  }
}

export default function Nav() {
  return (
    <Flex width="100vw" minH='60px' alignItems='center' px={6} border='1px solid green' justifyContent='space-between'>
      <SearchIcon></SearchIcon>
      <h1>Restaurante</h1>
      <HamburgerIcon></HamburgerIcon>
    </Flex>
  )
}