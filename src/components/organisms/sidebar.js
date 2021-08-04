import React, {useState, useEffect} from 'react';
import { BiCartAlt, BiBarcodeReader } from "react-icons/bi";
import Link from 'next/link';

export async function getServerSideProps(context) {
  return {
    props: {
    }
  }
}

export default function Sidebar() {
  return (
    <div className='w-1/6 sm:w-auto hidden md:flex'>
      <div className='self-end md:self-center flex flex-row items-right h-full p-4 sm:p-2'>
        <div>logo</div>
        <ul>
          <li>Page 1</li>
          <li>Page 2</li>
          <li>Page 3</li>
        </ul>
      </div>
    </div>
  )
}