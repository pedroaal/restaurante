import React, {useState, useEffect} from 'react';
import api from '@/config/api';

export async function getServerSideProps(context) {
  return {
    props: {
    }
  }
}

export default function Categories() {
  const [categories, setCategories] = useState([]);
  
  useEffect(async () => {
    const {data} = await api.get('products/getCategories');
    setCategories(data);
  }, [])

  const filterProducts = (key) => {
    console.log(key);
  }

  return (
    <div className='flex flex-nowrap w-full border-1 overflow-x-auto'>
      {categories.map((cat) => (
        <button className="btn-sm bg-gray-50" key={cat._id} onClick={() => filterProducts(cat._id)}>{cat.name}</button>
      ))}
    </div>
  )
}