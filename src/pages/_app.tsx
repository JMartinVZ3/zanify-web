import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { store } from '../store';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

import { ThemeProvider } from '@material-ui/core';
import { zanifyTheme } from '../theme/zanifyTheme';

import Navbar from '../components/Navbar/Navbar';

let persistor = persistStore(store);

function MyApp({
  Component, pageProps,
}: AppProps) {
  return (
    <ThemeProvider theme={zanifyTheme}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navbar/>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}


export default MyApp;