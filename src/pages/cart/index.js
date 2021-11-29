import Image from 'next/image';
import { baseAPI } from '@config/api';

import { useSelector } from 'react-redux';

import { toast } from 'react-toastify';

import Button from '@atoms/button';
import Layout from '@layouts/layout';
import ContentLayout from '@layouts/contentLayout';

toast.configure()

const Cart = () => {
  const order = useSelector(state => state.cartReducer)
  const cart = useSelector(state => state.cartReducer.cart)
  const coupon = useSelector(state => state.cartReducer.coupon)

  const ordenar = async () => {
    if (cart.length <= 0) {
      toast.error('Primero agrega un producto al carrito');
      return
    }

    if (order.store_id == 0 || order.table == 0) {
      toast.error('Primero escanea el QR');
      return
    }

    const response = await toast.promise(
      fetch(`${baseAPI}order`, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(order),
      })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err)),
      {
        pending: 'Ordenando...',
        success: 'Orden creada',
        error: 'No hemos podido crear tu orden'
      }
    )
    console.log(response);

    return
  }

  return (
    <Layout>
      <ContentLayout>
        {cart.map(item => (
          <div key={item.product._id} className='grid grid-cols-3 gap-2'>
            <Image
              src='/helado.jpeg'
              alt={item.product.name}
              width='100%'
              height='100%'
            />
            <div className='col-span-2'>
              <p>{item.product.name}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio: {item.price}</p>
            </div>
          </div>
        ))}
        <Button className='w-full' action={ordenar}>Ordenar</Button>
      </ContentLayout>
    </Layout>
  )
}

export default Cart;