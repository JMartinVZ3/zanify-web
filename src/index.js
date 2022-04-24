import React from "react";
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import { persistedReducer } from './reducers';

import App from './App';

import { ThemeProvider } from '@material-ui/core';
import CssBaseline from "@material-ui/core/CssBaseline";
import { zanifyTheme } from './theme/zanifyTheme';

import Shop from "./pages/Shop/Shop";

import Navbar from './components/Navbar/Navbar';
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";

const store = createStore(persistedReducer, compose(applyMiddleware(thunk)));

const persistor = persistStore(store);

ReactDOM.render(
    <ThemeProvider theme={zanifyTheme}>
        <CssBaseline />
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <BrowserRouter>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<App />}/>
                        <Route path="shop" element={<Shop/>}/>
                        <Route path="shopping-cart" element={<ShoppingCart/>}/>
                    </Routes>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </ThemeProvider>,
    document.getElementById('root')
);