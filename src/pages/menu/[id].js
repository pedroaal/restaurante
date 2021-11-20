import { useState } from 'react';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router'
import Head from 'next/head';
import { baseURL, baseAPI } from 'config/api';

import {
  addCart,
} from '@/redux/actions'
import { connect } from 'react-redux';

import Nav from '@/organisms/header';
import Footer from '@/organisms/footer';
import Sidebar from '@/organisms/sidebar';

export async function getServerSideProps(context) {
  return {
    props: {
      // products: jsonify(products),
    }
  }
}

const myLoader = (src) => {
  return `${baseURL}${src}`
}

function ProductDetail({products, cart, addCart}) {
  const router = useRouter()
  const {id} = router.query
  console.log(id);

  const cartProdInit = {
    quantity: 0,
    price: 0,
    product_id: id
  }

  const [session] = useSession();
  const [loading, setLoading] = useState(true)
  const [cartProd, setCartProd] = useState(cartProdInit)
  const [product, setProduct] = useState()

  const getProduct = () => {
    fetch(`${baseAPI}products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
  }

  if(!product) getProduct()

  return (
    <>
      <Head>
        <title>Detalle</title>
      </Head>

      <div className='flex flex-row'>
        <div className='flex flex-col h-screen sm:w-full md:w-5/6'>
          <div>
            <Nav />
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2 p-2'>
              {/* {cartProd} */}
            </div>
          </div>
          <Footer />
        </div>
        <Sidebar />
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  // all: state,
  cart: state.cartReducer,
  products: state.productReducer.products_all,
})

const mapDispatchToProps = {
  addCart: addCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);