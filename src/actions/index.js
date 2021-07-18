export const getCart = payload => ({
  type: 'GET_CART',
  payload
});

export const setProducts = payload => ({
  type: 'SET_PRODUCTS',
  payload
});

export const getProducts = payload => ({
  type: 'GET_PRODUCTS',
  payload
});

export const filterProducts = payload => ({
  type: 'FILTER_PRODUCTS',
  payload
});