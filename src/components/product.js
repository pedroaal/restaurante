import React, {useState, useEffect} from 'react';

export async function getServerSideProps(context) {
  return {
    props: {
    }
  }
}

export default function product() {
  const initialState = {
    store_id: '',
    category_id: '',
    name: '',
    description: '',
    img: '',
    iva: '',
    price: '',
    type: '',
    stock: '',
    sort: '',
  }
  const [product, setProduct] = useState(initialState);
  
  // useEffect(() => {
  //   setTimeout(() => {
  //     
  //   }, 1000);
  // }, [])

  return (
    
  )
}