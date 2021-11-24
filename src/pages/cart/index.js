import { connect } from 'react-redux';
import ContentLayout from '@layouts/contentLayout';
import Image from 'next/image';
import Layout from '@layouts/layout';
import Button from '@atoms/button';
import { toast } from 'react-toastify';

function Cart({ cart }) {
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
              alt={product.name}
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

const mapStateToProps = state => ({
  cart: state.cartReducer.cart,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);