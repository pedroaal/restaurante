import React from 'react';
import { Provider } from 'next-auth/client';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '@/reducers';
import '@/styles/globals.css';

// const initialState = {
//   'cart': {},
//   'products_filtered': {},
// }

const composeEnhancers = composeWithDevTools();

const store = createStore(
  reducers,
  // initialState,
  // composeEnhancers,
)

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ReduxProvider store={store}>
        <Component {...pageProps} />
      </ReduxProvider>
    </Provider>
  )
}

export default MyApp
