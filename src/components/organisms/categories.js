import React, {useState, useEffect} from 'react';
import { baseAPI } from '@/config/api';

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
    fetch(`${baseAPI}products/getCategories`)
    .then(res => res.json())
    .then(categories => {
      setCategories(categories);
      setLoading(false);
    });
  }, [])

  const skeleton = () => (
    [1,2,3].map(i => (
      <button className="btn-sm bg-gray-300 animate-pulse h-8 w-1/3" key={i}></button>
    ))
  );

  const filterProducts = (key) => {
    console.log(key);
  }

  return (
    <div className='flex flex-nowrap w-full p-1 overflow-x-auto'>
      {loading ? skeleton() : categories.map((cat) => (
        <button className="btn-sm bg-gray-200" key={cat._id} onClick={() => filterProducts(cat._id)}>{cat.name}</button>
      ))}
    </div>
  )
}