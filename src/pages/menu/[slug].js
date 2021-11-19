import Head from 'next/head';
import { useState } from 'react';
import { useSession } from 'next-auth/client';
import { baseAPI } from 'config/api'

import {
  addCart,
} from '@/redux/actions'
import { connect } from 'react-redux';

import Nav from '@/organisms/header';
import Footer from '@/organisms/footer';
import Categories from '@/organisms/categories';
import Sidebar from '@/organisms/sidebar';

// import Producto from '@/molecules/product'
import Skeleton from '@/molecules/skeleton';
import Producto from '@/components/molecules/product';

export async function getServerSideProps(context) {
  return {
    props: {
      // products: jsonify(products),
    }
  }
}

function ProductDetail({product, addCart}) {
  const [session] = useSession();
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Head>
        <title>Menú</title>
      </Head>

      <div className='flex flex-row'>
        <div className='flex flex-col h-screen sm:w-full md:w-5/6'>
          <div>
            <Nav />
            <Categories />
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2 p-2'>
              {producto}
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
})

const mapDispatchToProps = {
  addCart: addCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);