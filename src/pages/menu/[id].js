import { useState } from 'react';
import { FaPlus, FaMinus, FaCartPlus } from 'react-icons/fa';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { baseURL, baseAPI } from 'config/api';

import {
  addCart,
} from '@/redux/actions'
import { connect } from 'react-redux';

import Skeleton from '@/molecules/skeleton';
import Layout from '@/layouts/layout';
import ContentLayout from '@/layouts/contentLayout';

export async function getServerSideProps(context) {
  return {
    props: {
      // products: jsonify(products),
    }
  }
}

const myLoader = ({ src }) => {
  return `${baseURL}${src}`
}
toast.configure()

function ProductDetail({ cart, addCart }) {
  const router = useRouter()
  const { id } = router.query
  const cartProdInit = {
    quantity: 0,
    price: 0,
    product: null
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
        setCartProd({
          ...cartProd,
          product: data
        })
        setLoading(false);
      })
  }

  if (!product) getProduct()

  if (cart.length > 0 && cartProd.quantity == 0) {
    const prodIndx = cart.findIndex(product => product.product._id == id)
    if (prodIndx >= 0) setCartProd(cart[prodIndx])
  }

  const addQty = () => {
    if (cartProd.quantity >= 100) {
      toast('Máximo alcanzado')
      return
    }
    const qty = cartProd.quantity + 1
    let state = {
      ...cartProd,
      quantity: qty,
      price: product.price * qty,
    }
    setCartProd(state)
  }
  const restQty = () => {
    if (cartProd.quantity <= 0) {
      toast.error('Mínimo alcanzado')
      return
    }
    const qty = cartProd.quantity - 1
    let state = {
      ...cartProd,
      quantity: qty,
      price: product.price * qty,
    }
    setCartProd(state)
  }
  const saveCart = () => {
    if (cartProd.quantity <= 0) {
      toast.error('Aumenta la cuenta')
      return
    }

    addCart(cartProd)
  }
  const productDetail = () => (
    <>
      <Image
        loader={myLoader}
        src='helado.jpeg'
        alt={product.name}
        width='100%'
        height='100%'
      />
      <div>
        <h1>{product.name}</h1>
        <h2>{product.description}</h2>
        <div className='flex'>
          <FaMinus className='flex-1' onClick={restQty} />
          <p className='flex-1 text-center'>{cartProd.quantity}</p>
          <FaPlus className='flex-1' onClick={addQty} />
        </div>
        <p>Precio: {cartProd.price}</p>
        <FaCartPlus className='flex-1' onClick={saveCart} />
      </div>
    </>
  )

  return (
    <Layout title='Detalle | slug'>
      <ContentLayout>
        {loading ?
          <Skeleton key={1} /> :
          productDetail()
        }
      </ContentLayout>
    </Layout>
  )
}

const mapStateToProps = state => ({
  // all: state,
  cart: state.cartReducer.cart,
  // products: state.productReducer.products_all,
})

const mapDispatchToProps = {
  addCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);