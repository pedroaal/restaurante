import * as types from '@/redux/types'
import { toast } from 'react-toastify';

const INITIAL_STATE = {
  store_id: 0,
  table_id: 0,
  cart: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_CART:
      return { ...state, cart: action.payload };
      break;
    case types.ADD_CART:
      const prodIndx = state.cart.findIndex(product => product.product._id == action.payload.product._id)
      let cart = state.cart
      if (prodIndx >= 0) cart = [...state.cart.slice(0, prodIndx), ...state.cart.slice(prodIndx + 1)]
      toast.success("Agregado al carrito");
      return { ...state, cart: [...cart, action.payload] };
      break;
    default:
      return state;
      break;
  }
}

export default cartReducer;