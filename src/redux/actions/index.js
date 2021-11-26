import { SET_CATEGORIES, SET_PRODUCTS, FILTER_PRODUCTS } from '@/redux/types'

export const setCategories = payload => ({
  type: SET_CATEGORIES,
  payload
});

export const setProducts = payload => ({
  type: SET_PRODUCTS,
  payload
});

export const setFiltered = payload => ({
  type: FILTER_PRODUCTS,
  payload
});