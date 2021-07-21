import Head from 'next/head';
import {useState, useEffect} from 'react';
import { useSession } from 'next-auth/client';
import Nav from '@/components/header';
import Categories from '@/components/categories';
import { connect } from 'react-redux';
import { setProducts } from '@/actions';

const myLoader = (src) => {
  return `http://127.0.0.1:3000/${src}`
}

export async function getServerSideProps(context) {
  // await dbConnect();
  
  // const products = await Product.find({}).exec();

  return {
    props: {
      // products: jsonify(products),
    }
  }
}

const Home = () => {
  const [ session ] = useSession();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState();

  const saveProducts = () => {
    fetch('/api/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        setLoading(false);
      })
  }

  // console.log(products);
  // if(products.length <= 0){
    saveProducts()
  // }

  const skeleton = () => (
    <div></div>
  );

  const makeProd = (product) => (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src={myLoader('helado.jpeg')} alt={product.name} />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{product.name}</div>
        <p class="text-gray-700 text-base">
          $ {product.price}
        </p>
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Menú</title>
      </Head>

      <div className='flex flex-col'>
          <Nav />
          <Categories />
          <div className='grid grid-cols-2 gap-2 p-2'>
            {loading ? skeleton : products.map(prod => makeProd(prod)) }
          </div>
        {/* <Footer /> */}
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    products: state.products_filtered
  }
}

const mapDispatchToProps = {
  setProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);