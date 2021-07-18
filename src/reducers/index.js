import { combineReducers } from 'redux';
import cartReducer from '@/reducers/cartReducer';
import productReducer from '@/reducers/productReducer';

export default combineReducers({
  cartReducer, productReducer
});