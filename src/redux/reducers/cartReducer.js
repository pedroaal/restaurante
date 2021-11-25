import * as types from '@/redux/types'
import { toast } from 'react-toastify';

const INITIAL_STATE = {
  store_id: '60f65544480e19e273dab114',
  table: 0,
  coupon: 0,
  total: 0,
  cart: []
}

toast.configure()

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_CART:
      return { ...state, cart: action.payload };
      break;
    case types.ADD_CART:
      // Copio el cart actual
      let cart = state.cart

      // busco si el producto ya existe y lo quito
      const prodIndx = state.cart.findIndex(product => product.product._id == action.payload.product._id)
      if (prodIndx >= 0) cart = [...state.cart.slice(0, prodIndx), ...state.cart.slice(prodIndx + 1)]

      // agrego el nuevo producto y saco el total
      cart = [...cart, action.payload]
      const total = cart.reduce((sum, product) => sum + product.price, 0)

      toast.success("Agregado al carrito");

      return { ...state, total, cart };
      break;
    default:
      return state;
      break;
  }
}

export default cartReducer;