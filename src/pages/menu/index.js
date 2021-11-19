import Head from 'next/head';
import { useState } from 'react';
import { useSession } from 'next-auth/client';
import { baseURL, baseAPI } from 'config/api'

import {
  setProducts,
  setFiltered,
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

function Home({products, setProducts, filtered, setFiltered}) {
  const [session] = useSession();
  const [loading, setLoading] = useState(true);
  // const [products, setProducts] = useState([]);

  const saveProducts = () => {
    fetch(`${baseAPI}products`)
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        setFiltered(json);
        setLoading(false);
      })
  }

  if(products.length <= 0){
    saveProducts()
  }

  const skeleton = (n) => (
    <Skeleton key={n} />
  );

  const makeProd = (producto) => (
    <Producto producto={producto} key={producto._id} />
  );

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
              {loading ? [1,2,3,4].map(i => skeleton(i)) : filtered.length > 0 ?  filtered.map(prod => makeProd(prod)) : 'Sin datos' }
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
  products: state.productReducer.products_all,
  filtered: state.productReducer.products_filtered,
})

const mapDispatchToProps = {
  setProducts: setProducts,
  setFiltered:setFiltered,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);