import React, { useState, useEffect } from 'react';
import { BiCartAlt, BiBarcodeReader } from "react-icons/bi";
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

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
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
          </svg>
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