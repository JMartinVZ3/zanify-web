import '../styles/globals.css'
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { store } from '../services/store';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

import Navbar from '../components/Navbar/Navbar';

let persistor = persistStore(store);

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navbar/>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
  );
}

export default MyApp
