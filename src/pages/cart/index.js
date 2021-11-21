import { connect } from 'react-redux';
import ContentLayout from '@/components/layouts/contentLayout';
import Image from '@/atoms/image';
import Layout from '@/layouts/layout';

export async function getServerSideProps(context) {
  return {
    props: {
    }
  }
}

function Cart({ cart }) {
  return (
    <Layout>
      <ContentLayout>
        {cart.map(item => (
          <div key={item.product._id} className='grid grid-cols-3'>
            <Image name={item.product.name} url={item.product.img} />
            <div className='col-span-2'>
              <p>{item.product.name}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio: {item.price}</p>
            </div>
          </div>
        ))}
      </ContentLayout>
    </Layout>
  )
}

const mapStateToProps = state => ({
  cart: state.cartReducer.cart,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);