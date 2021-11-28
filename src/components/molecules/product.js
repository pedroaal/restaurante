import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Producto = ({ producto }) => {
  return (
    <Link href='/menu/[slug]' as={`/menu/${producto._id}`}>
      <div className="w-full rounded overflow-hidden shadow-lg">
        <Image
          src='/helado.jpeg'
          alt={producto.name}
          width='w-full'
          height='h-full'
        />
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

export default Producto