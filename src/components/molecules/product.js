import React from 'react';
import { baseURL } from '@/config/api';
import Link from 'next/link';

const myLoader = (src) => {
  return `${baseURL}${src}`
}

// const getSlug = name => {
//   console.log(name);
//   return 'slug'
// }

export default function Producto({ producto }) {
  return (
    <Link href='/menu/[slug]' as={`/menu/${producto._id}`}>
      <div className="w-full rounded overflow-hidden shadow-lg">
        <img className="w-full" src={myLoader('helado.jpeg')} alt={producto.name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{producto.name}</div>
          <p className="text-gray-700 text-base">
            $ {producto.price}
          </p>
        </div>
      </div>
    </Link>
  )
}