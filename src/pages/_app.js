import React from 'react';
import { Provider } from 'next-auth/client';

import wrapper from '@/redux/store';

import 'react-toastify/dist/ReactToastify.css';

import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default wrapper.withRedux(MyApp)
