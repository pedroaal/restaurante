import { createStore, applyMiddleware } from 'redux';
// import { HYDRATE, createWrapper } from 'next-redux-wrapper';
// import { ThunkMiddleware } from 'redux-thunk';
import thunk from 'redux-thunk';
import rootReducer from '@/redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk]

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware))
  }

  return applyMiddleware(...middleware)
}
// const composeEnhancers = composeWithDevTools();

const store = createStore(
  rootReducer,
  bindMiddleware(middleware)
)

export default store