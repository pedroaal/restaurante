import React from 'react';
import { Provider } from 'next-auth/client';

import { Provider as ReduxProvider } from 'react-redux';
import store from '@/redux/store'

import '@/styles/globals.css';

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
