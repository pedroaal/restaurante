import { ADD_CART, SET_LOCAL } from '@/redux/types'

export const addCart = payload => ({
  type: ADD_CART,
  payload
});

export const setLocal = payload => ({
  type: SET_LOCAL,
  payload
})