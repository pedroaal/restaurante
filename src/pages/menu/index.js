import { useState } from 'react';
import { baseAPI } from 'config/api';
import { useSession } from 'next-auth/client';

// import Category from '@/models/category';
// import { dbConnect } from '@/utils/dbConnect';

import {
  setCategories,
  setProducts,
  setFiltered,
} from '@/redux/actions';
import { useSelector, useDispatch } from 'react-redux';

import Layout from '@layouts/layout';
import GridSkeleton from '@organisms/gridSkeleton';
import GridProducts from '@organisms/gridProducts';

export async function getServerSideProps(context) {
  const categories_res = await fetch(`${baseAPI}products/getCategories`)
  const categories = await categories_res.json()

  const products_res = await fetch(`${baseAPI}products`)
  const products = await products_res.json()

  return {
    props: {
      categories,
      products,
    }
  }
}

function Menu({ categories, products }) {
  const [session] = useSession();

  const dispatch = useDispatch()
  // const products = useSelector(state => state.productReducer.products_all)
  // const filtered = useSelector(state => state.productReducer.products_filtered)
  const filtered = products

  dispatch(setCategories(categories))
  dispatch(setProducts(products))
  dispatch(setFiltered(products))

  // const [loading, setLoading] = useState(products.length ? false : true);

  // const saveProducts = () => {
  //   fetch(`${baseAPI}products`)
  //     .then(res => res.json())
  //     .then(json => {
  //       dispatch(setProducts(json))
  //       dispatch(setFiltered(json))
  //       setLoading(false);
  //     })
  // }

  // if (products.length <= 0) {
  //   saveProducts()
  // }

  return (
    <Layout title='Menú' categories={true}>
      {/* {loading ?
        <GridSkeleton /> :
        filtered.length > 0 ?
          <GridProducts /> :
          'Sin datos'
      } */}
      {
        filtered.length > 0 ?
          <GridProducts /> :
          'Sin datos'
      }
    </Layout>
  )
}

export default Menu;