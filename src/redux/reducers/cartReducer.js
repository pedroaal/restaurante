import * as types from '@/redux/types'

const INITIAL_STATE = {
  store_id: 0,
  table_id: 0,
  cart: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case types.GET_CART:
      return { ...state, cart: action.payload };
      break;
    case types.ADD_CART:
      console.log(action)
      return { ...state, cart: action.payload };
      break;
    default:
      return state;
      break;
  }
}

export default cartReducer;