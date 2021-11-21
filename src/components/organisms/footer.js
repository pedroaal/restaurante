import React, { useState, useEffect } from 'react';
import { BiCartAlt, BiBarcodeReader } from "react-icons/bi";
import Link from 'next/link';
import { FaShoppingCart, FaQrcode } from 'react-icons/fa';

export async function getServerSideProps(context) {
  return {
    props: {
    }
  }
}

export default function Footer() {
  return (
    <>
      <div className='flex'>
        <div className='p-4 w-1/2 flex justify-center'>
          <Link href='/'>
            <FaQrcode />
          </Link>
        </div>
        <div className='p-4 w-1/2 flex justify-center'>
          <Link href='/cart'>
            <FaShoppingCart />
          </Link>
        </div>
      </div>
    </>
  )
}