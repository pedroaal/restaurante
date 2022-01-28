import Link from 'next/link';

import { FaShoppingCart, FaQrcode } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <div className='flex items-center'>
        <div className='p-4 w-1/2 flex justify-center'>
          <Link href='/'>
            <i><FaQrcode /></i>
          </Link>
        </div>
        <div className='p-4 w-1/2 flex justify-center'>
          <Link href='/cart'>
            <i><FaShoppingCart /></i>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Footer