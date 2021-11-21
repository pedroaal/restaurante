import React, { useState, useEffect } from 'react';
import { baseAPI } from '@/config/api';
import { connect } from 'react-redux';
import { setFiltered } from '@/redux/actions';

import { FaUndo } from 'react-icons/fa';

export async function getServerSideProps(context) {
  return {
    props: {
    }
  }
}

function Categories({ products, filtered, setFiltered }) {
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
    [1, 2, 3].map(i => (
      <button className="btn-sm bg-gray-300 animate-pulse h-8 w-1/3" key={i}></button>
    ))
  );

  const filterProducts = key => {
    if (key) {
      setFiltered(products.filter(prod => prod.category_id == key))
      return
    }

    setFiltered([...products])
  }

  return (
    <div className='flex flex-nowrap w-full p-1 overflow-x-auto'>
      <button className="btn-sm bg-gray-200" key='refresh' onClick={() => filterProducts(null)}>
        &nbsp;<FaUndo />&nbsp;
      </button>
      {loading ? skeleton() : categories.map((cat) => (
        <button className="btn-sm bg-gray-200" key={cat._id} onClick={() => filterProducts(cat._id)}>{cat.name}</button>
      ))}
    </div>
  )
}

const mapStateToProps = state => ({
  // all: state,
  products: state.productReducer.products_all,
  filtered: state.productReducer.products_filtered,
})

const mapDispatchToProps = {
  setFiltered: setFiltered,
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);