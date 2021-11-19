import * as types from '@/redux/types'

const INITIAL_STATE = {
  products_all: [],
  products_filtered: [],
}

const productReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case types.SET_PRODUCTS:
      return { ...state, products_all: action.payload };
      break;
    case types.GET_PRODUCTS:
      return { ...state, products_all: action.payload };
      break;
    case types.FILTER_PRODUCTS:
      return { ...state, products_filtered: action.payload };
      break;
    default:
      return state;
      break;
  }
}

export default productReducer;