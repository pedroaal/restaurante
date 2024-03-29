import { SET_CATEGORIES, SET_PRODUCTS, FILTER_PRODUCTS } from '@/redux/types';
// import { toast } from 'react-toastify';

// toast.configure()

const INITIAL_STATE = {
  categories: [],
  products_all: [],
  products_filtered: [],
}

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return { ...state, categories: action.payload };
      break;
    case SET_PRODUCTS:
      return { ...state, products_all: action.payload };
      break;
    case FILTER_PRODUCTS:
      return { ...state, products_filtered: action.payload };
      break;
    default:
      return state;
      break;
  }
}

export default productReducer;