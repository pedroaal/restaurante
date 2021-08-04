import React, {useState, useEffect} from 'react';
import api from '@/config/api';

export async function getServerSideProps(context) {
  return {
    props: {
    }
  }
}

export default function Categories() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  
  useEffect(async () => {
    const {data} = await api.get('products/getCategories');
    setCategories(data);
    setLoading(false);
  }, [])

  const skeleton = () => (
    <button className="btn-sm bg-gray-300 animate-pulse h-8 w-1/3"></button>
  );

  const filterProducts = (key) => {
    console.log(key);
  }

  return (
    <div className='flex flex-nowrap w-full p-1 overflow-x-auto'>
      {loading ? [1,2,3].map(i => {return skeleton(i)}) : categories.map((cat) => (
        <button className="btn-sm bg-gray-200" key={cat._id} onClick={() => filterProducts(cat._id)}>{cat.name}</button>
      ))}
    </div>
  )
}