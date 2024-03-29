import { ADD_CART, SET_LOCAL } from '@/redux/types'
import { toast } from 'react-toastify';

toast.configure()

const INITIAL_STATE = {
  store_id: 0,
  table: 0,
  coupon: 0,
  total: 0,
  cart: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CART:
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
    case SET_LOCAL:
      return { ...state, store_id: action.payload.store_id, table: action.payload.table }
      break
    default:
      return state;
      break;
  }
}

export default cartReducer;