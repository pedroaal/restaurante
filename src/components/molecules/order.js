import Link from 'next/link';
import { baseAPI } from '@/config/api';
import { useRouter } from 'next/router';

import { toast } from 'react-toastify';

import Button from '@atoms/button';

function Order({ order, order_id }) {
  const cart = order.cart
  const router = useRouter()

  const terminar = async () => {
    const response = await toast.promise(
      fetch(`${baseAPI}order/${order_id}`, {
        method: "PUT",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...order,
          finish: true
        }),
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          router.reload()
        })
        .catch(err => console.log(err)),
      {
        pending: 'Terminando orden...',
        success: 'Orden terminada',
        error: 'No hemos podido terminar tu orden'
      }
    )
    console.log(response);
  }

  const makeProduct = product => (
    <div className='flex align-middle' key={product.product._id}>
      <p className="flex-grow font-bold">{product.product.name}</p>
      <p>x {product.quantity}</p>
    </div>
  )

  return (
    // <Link href='/'>
    <div className="w-full rounded overflow-hidden shadow-lg mb-4">
      <div className="px-6 py-4">
        <p className='mb-2'>Mesa: {order.table}</p>
        {cart.map(product => makeProduct(product))}
        <Button className='justify-self-end' action={terminar}>Terminar pedido</Button>
      </div>
    </div>
    // </Link>
  )
}

export default Order