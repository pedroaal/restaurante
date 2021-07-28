import Head from 'next/head';
import {useState, useEffect} from 'react';
import { useSession } from 'next-auth/client';
import Nav from '@/components/header';
import Footer from '@/components/footer';
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
  const [session] = useSession();
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

  const skeleton = (n) => (
    <div className="max-w-sm rounded overflow-hidden shadow-lg" key={n}>
      <div className="bg-gray-400 lg:h-48 md:h-36 h-24 w-full object-cover object-center"></div>
      <div className="px-6 py-4">
        <h2 className="bg-gray-400 animate-pulse h-4 w-100 mb-2"></h2>
        <h1 className="bg-gray-500 animate-pulse h-3 w-1/2"></h1>
      </div>
    </div>
  );

  const makeProd = (product) => (
    <div className="max-w-sm rounded overflow-hidden shadow-lg" key={product._id}>
      <img className="w-full" src={myLoader('helado.jpeg')} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">
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
          <div className='grid grid-cols-2 md:grid-cols-4 gap-2 p-2'>
            {loading ? [1,2,3,4].map(i => {return skeleton(i)}) : products.map(prod => makeProd(prod)) }
          </div>
        <Footer />
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