import thunk from 'redux-thunk';
import rootReducer from '@/redux/reducers';
import { createWrapper } from 'next-redux-wrapper';
import { createStore, applyMiddleware } from 'redux';

const middleware = [thunk]

const bindMiddleware = middleware => {
  if (process.env.APP_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware))
  }

  return applyMiddleware(...middleware)
}

const makeStore = () => {
  return createStore(
    rootReducer,
    bindMiddleware(middleware)
  )
}

const wrapper = createWrapper(makeStore)

export default wrapper