import Link from 'next/link';

import { FaSearch, FaBars } from 'react-icons/fa';

export default function Nav() {
  return (
    <nav>
      <div className='flex justify-center items-center bg-gray-300 w-full p-4'>
        <div className='flex-none'>
          <FaSearch />
        </div>
        <div className='flex-grow'>
          <Link href='/menu'>
            <h1 className='text-center'>Restaurante</h1>
          </Link>
        </div>
        <div className='flex-none'>
          <FaBars />
        </div>
      </div>
    </nav>
  )
}