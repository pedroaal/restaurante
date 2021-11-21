import React, { useState, useEffect } from 'react';
import Sidebar from '@/organisms/sidebar';
import Link from 'next/link';

export async function getServerSideProps(context) {
  return {
    props: {
    }
  }
}

export default function Nav() {
  return (
    <nav>
      <div className='flex justify-center bg-gray-300 w-full p-4'>
        <div className='flex-none'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <div className='flex-grow'>
          <Link href='/menu'>
            <h1 className='text-center'>Restaurante</h1>
          </Link>
        </div>
        <div className='flex-none'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>
    </nav>
  )
}