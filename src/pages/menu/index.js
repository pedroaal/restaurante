import { useState } from 'react';
import { useSession } from 'next-auth/client';
import { baseURL, baseAPI } from 'config/api'

import {
  setProducts,
  setFiltered,
} from '@/redux/actions'
import { connect } from 'react-redux';

import Layout from '@/layouts/layout';
import GridSkeleton from '@/organisms/gridSkeleton';
import GridProducts from '@/organisms/gridProducts';

export async function getServerSideProps(context) {
  return {
    props: {
      // products: jsonify(products),
    }
  }
}

function Home({ products, setProducts, filtered, setFiltered }) {
  const [session] = useSession();
  const [loading, setLoading] = useState(products.length ? false : true);

  const saveProducts = () => {
    fetch(`${baseAPI}products`)
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        setFiltered(json);
        setLoading(false);
      })
  }

  if (products.length <= 0) {
    saveProducts()
  }

  return (
    <Layout title='Menú' categories={true}>
      {loading ?
        <GridSkeleton /> :
        filtered.length > 0 ?
          <GridProducts /> :
          'Sin datos'
      }
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
  setFiltered: setFiltered,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);