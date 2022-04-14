import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

import { ThemeProvider } from '@material-ui/core';
import { zanifyTheme } from './theme/zanifyTheme';

import Shop from "./pages/Shop/Shop";

import Navbar from './components/Navbar/Navbar';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <ThemeProvider theme={zanifyTheme}>
        <Provider store={store}>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<App />}/>
                    <Route path="shop" element={<Shop/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    </ThemeProvider>,
    document.getElementById('root')
);