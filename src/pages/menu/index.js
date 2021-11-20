import { useState } from 'react';
import { useSession } from 'next-auth/client';
import { baseURL, baseAPI } from 'config/api'

import {
  setProducts,
  setFiltered,
} from '@/redux/actions'
import { connect } from 'react-redux';

import Layout from '@/components/layout';
import Skeleton from '@/molecules/skeleton';
import Producto from '@/molecules/product';

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
    <Layout title='Menu' categories={true}>
      {loading ? [1,2,3,4].map(i => skeleton(i)) : filtered.length > 0 ?  filtered.map(prod => makeProd(prod)) : 'Sin datos' }
    </Layout>
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