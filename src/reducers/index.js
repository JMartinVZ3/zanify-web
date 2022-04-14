import { combineReducers } from 'redux';

import categories from './categories';

import shoppingCart from './shoppingCart';

export default combineReducers({
    categories, 
    shoppingCart,
})