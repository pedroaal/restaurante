import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';

import Product from '@/models/product';
import { dbConnect } from '@/utils/dbConnect';

import {
  addCart,
} from '@/redux/actions/cart'
import { useDispatch, useSelector } from 'react-redux';

import { toast } from "react-toastify";

import Layout from '@layouts/layout';
import ContentLayout from '@layouts/contentLayout';
import { FaPlus, FaMinus, FaCartPlus } from 'react-icons/fa';

export async function getStaticPaths() {
  await dbConnect()
  const products = await Product.find({})
  const paths = products.map(({ _id }) => ({ params: { id: `${_id}` } }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  await dbConnect()
  const doc = await Product.findById(params.id).limit(20)
  const product = doc.toObject();
  product._id = product._id.toString();
  if (product.category_id)
    product.category_id = product.category_id.toString();

  return {
    props: {
      product
    }
  }
}

toast.configure()

function ProductDetail({ product }) {
  const [session] = useSession();
  const dispatch = useDispatch()
  const router = useRouter()

  const cart = useSelector(state => state.cartReducer.cart)

  const { id } = router.query
  const cartProdInit = {
    quantity: 0,
    price: 0,
    product
  }

  const [cartProd, setCartProd] = useState(cartProdInit)

  if (cart.length > 0 && cartProd.quantity == 0) {
    const prodIndx = cart.findIndex(cart_prod => cart_prod.product._id == id)
    if (prodIndx >= 0) setCartProd(cart[prodIndx])
  }

  const addQty = () => {
    if (cartProd.quantity >= 100) {
      toast('Máximo alcanzado')
      return
    }
    const quantity = cartProd.quantity + 1
    const price = product.price * quantity
    const state = {
      ...cartProd,
      quantity,
      price,
    }
    setCartProd(state)
  }

  const restQty = () => {
    if (cartProd.quantity <= 0) {
      toast.error('Mínimo alcanzado')
      return
    }
    const quantity = cartProd.quantity - 1
    const price = product.price * quantity
    const state = {
      ...cartProd,
      quantity,
      price,
    }
    setCartProd(state)
  }

  const saveCart = () => {
    if (cartProd.quantity <= 0) {
      toast.error('Aumenta la cuenta')
      return
    }

    dispatch(addCart(cartProd))
  }

  return (
    <Layout title='Detalle | slug'>
      <ContentLayout>
        <Image
          src='/helado.jpeg'
          alt={product.name}
          width='w-full'
          height='h-full'
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
      </ContentLayout>
    </Layout>
  )
}

export default ProductDetail;