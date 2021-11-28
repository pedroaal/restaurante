import { setFiltered } from '@/redux/actions';
import { useDispatch, useSelector } from 'react-redux';

import { FaUndo } from 'react-icons/fa';

const Categories = () => {
  const dispatch = useDispatch()
  const categories = useSelector(state => state.productReducer.categories)
  const products = useSelector(state => state.productReducer.products_all)

  const filterProducts = key => {
    if (key) {
      dispatch(setFiltered(products.filter(prod => prod.category_id == key)))
      return
    }

    dispatch(setFiltered([...products]))
  }

  return (
    <div className='flex flex-nowrap w-full p-1 overflow-x-auto'>
      <button className="btn-sm bg-gray-200" key='refresh' onClick={() => filterProducts(null)}>
        &nbsp;<FaUndo />&nbsp;
      </button>
      {
        categories.map((cat) => (
          <button className="btn-sm bg-gray-200" key={cat._id} onClick={() => filterProducts(cat._id)}>{cat.name}</button>
        ))
      }
    </div>
  )
}

export default Categories;