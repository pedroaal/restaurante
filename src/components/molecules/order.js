import Link from 'next/link';

function Order({ order }) {
  const cart = order.cart

  const makeProduct = product => (
    <div className='flex align-middle'>
      <p className="flex-grow font-bold">{product.product.name}</p>
      <p>x {product.quantity}</p>
    </div>
  )

  return (
    <Link href=''>
      <div className="w-full rounded overflow-hidden shadow-lg mb-4">
        <div className="px-6 py-4">
          <p className='mb-2'>Mesa: {order.table}</p>
          {cart.map(product => makeProduct(product))}
        </div>
      </div>
    </Link>
  )
}

export default Order