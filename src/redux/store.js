import { createStore, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import rootReducer from '@/redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk]

const bindMiddleware = middleware => {
  // console.log(process.env.APP_ENV);
  // if (process.env.APP_ENV !== 'production') {
  //   const { composeWithDevTools } = require('redux-devtools-extension');
  //   return composeWithDevTools(applyMiddleware(...middleware))
  // }

  return composeWithDevTools(applyMiddleware(...middleware))
  // return applyMiddleware(...middleware)
}

const makeStore = () => {
  return createStore(
    rootReducer,
    bindMiddleware(middleware)
  )
}

const wrapper = createWrapper(makeStore)

export default wrapper