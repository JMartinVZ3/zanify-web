import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {
    persistReducer,
} from 'redux-persist';

import categories from './categories';

import shoppingCart from './shoppingCart';

const reducers = combineReducers({
    categories, 
    shoppingCart,
})

const persistConfig = {
    key: 'root',
    storage,
};

export const persistedReducer = persistReducer(persistConfig, reducers)
