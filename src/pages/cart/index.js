import Image from 'next/image';

import { useSelector } from 'react-redux';

import { toast } from 'react-toastify';

import Button from '@atoms/button';
import Layout from '@layouts/layout';
import ContentLayout from '@layouts/contentLayout';

function Cart() {
  const cart = useSelector(state => state.cartReducer.cart)

  const ordenar = () => {
    toast.success('Ordenando...');
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
        <Button title='Ordenar' action={ordenar} />
      </ContentLayout>
    </Layout>
  )
}

export default Cart;