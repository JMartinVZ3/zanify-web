import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

import { ThemeProvider } from '@material-ui/core';
import { zanifyTheme } from './theme/zanifyTheme';

import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <ThemeProvider theme={zanifyTheme}>
        <Provider store={store}>
            <App /> 
        </Provider>
    </ThemeProvider>,
    document.getElementById('root')
);