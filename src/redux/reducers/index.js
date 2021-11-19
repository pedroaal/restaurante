import { combineReducers } from 'redux';
import cartReducer from '@/reducers/cartReducer';
import productReducer from '@/reducers/productReducer';

const rootReducer = combineReducers({
  cartReducer, productReducer
});

export default rootReducer