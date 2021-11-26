import { SET_ORDERS, END_ORDERS } from '@/redux/types'

export const setOrders = payload => ({
  type: SET_ORDERS,
  payload
});

export const endOrder = payload => ({
  type: END_ORDERS,
  payload
});