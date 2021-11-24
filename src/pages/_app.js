import React from 'react';
import { Provider } from 'next-auth/client';
import { createWrapper } from 'next-redux-wrapper';

import { Provider as ReduxProvider } from 'react-redux';
import store from '@/redux/store';

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

const makeStore = () => store
const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(MyApp)
