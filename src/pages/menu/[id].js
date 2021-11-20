import { useState } from 'react';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router'
import { baseURL, baseAPI } from 'config/api';

import {
  addCart,
} from '@/redux/actions'
import { connect } from 'react-redux';

import Layout from '@/components/layout';

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
    <Layout title='Detalle'>
      hola
    </Layout>
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