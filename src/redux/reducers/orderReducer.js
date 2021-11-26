import { SET_ORDERS } from '@/redux/types'
// import { toast } from 'react-toastify';

// toast.configure()

const INITIAL_STATE = {
  orders: []
}

const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ORDERS:
      console.log(action.payload)
      return { ...state, orders: action.payload };
      break;
    default:
      return state;
      break;
  }
}

export default orderReducer;