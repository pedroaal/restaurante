import * as types from '@/redux/types'

export const getCart = payload => ({
  type: types.GET_CART,
  payload
});

export const addCart = payload => ({
  type: types.ADD_CART,
  payload
});

export const getProducts = payload => ({
  type: types.GET_PRODUCTS,
  payload
});

export const setProducts = payload => ({
  type: types.SET_PRODUCTS,
  payload
});

export const setFiltered = payload => ({
  type: types.FILTER_PRODUCTS,
  payload
});