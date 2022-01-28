import { combineReducers } from 'redux';
import cartReducer from '@reducers/cartReducer';
import productReducer from '@reducers/productReducer';
import orderReducer from '@reducers/orderReducer';

const rootReducer = combineReducers({
  cartReducer, productReducer, orderReducer
});

export default rootReducer