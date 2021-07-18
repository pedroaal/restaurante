const INITIAL_STATE = {
  products_all: [],
  products_filtered: [],
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products_all: action.payload };
      break;
    case 'GET_PRODUCTS':
      return { ...state, products_all: action.payload };
      break;
    case 'FILTER_PRODUCTS':
      return { ...state, products_filtered: action.payload };
      break;
    default:
      return { state };
      break;
  }
}