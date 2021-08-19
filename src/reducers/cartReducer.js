const INITIAL_STATE = {
  store_id: 0,
  table_id: 0,
  cart: {}
}

const cart = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'GET_CART':
      return { ...state, cart: action.payload };
      break;
    default:
      return { state };
      break;
  }
}

export default cart;