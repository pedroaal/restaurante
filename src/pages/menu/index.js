import { useSession } from 'next-auth/client';

import Product from '@/models/product';
import Category from '@/models/category';
import { dbConnect } from '@/utils/dbConnect';

import {
  setCategories,
  setProducts,
  setFiltered,
} from '@/redux/actions';
import { useDispatch } from 'react-redux';

import Layout from '@layouts/layout';
import GridProducts from '@organisms/gridProducts';

export async function getStaticProps() {
  await dbConnect()
  const categories_res = await Category.find({})
  const categories = categories_res.map(doc => {
    const category = doc.toObject();
    category._id = category._id.toString();
    category.createdAt = category.createdAt.toString();
    category.updatedAt = category.updatedAt.toString();
    return category;
  });

  const products_res = await Product.find({}).limit(20)
  const products = products_res.map(doc => {
    const products = doc.toObject();
    products._id = products._id.toString();
    if (products.category_id)
      products.category_id = products.category_id.toString();
    return products;
  });

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

  const filtered = products

  dispatch(setCategories(categories))
  dispatch(setProducts(products))
  dispatch(setFiltered(products))

  return (
    <Layout title='Menú' categories={true}>
      {
        filtered.length > 0 ?
          <GridProducts /> :
          'Sin datos'
      }
    </Layout>
  )
}

export default Menu;