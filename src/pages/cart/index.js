import { connect } from 'react-redux';
import ContentLayout from '@layouts/contentLayout';
import Image from '@atoms/image';
import Layout from '@layouts/layout';
import Button from '@atoms/button';
import { toast } from 'react-toastify';

export async function getServerSideProps(context) {
  return {
    props: {
    }
  }
}

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
            <Image name={item.product.name} url={item.product.img} />
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