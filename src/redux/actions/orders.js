import { END_ORDERS } from '@/redux/types'

export const endOrder = payload => ({
  type: END_ORDERS,
  payload
});