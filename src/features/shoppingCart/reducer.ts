import { createReducer } from '@reduxjs/toolkit';

import { 
    getShoppingCartProducts, 
    addProduct, 
    deleteProduct,
    quantityProduct
} from "../../domain/shoppingCart";

import { Product } from "../../domain/product";

import {
  GetShoppingCartProducts,
  AddProduct,
  DeleteProduct,
  QuantityProduct
} from './actions';

type ShoppingCartState = {
    data: Product[];
    pending: boolean;
    error: boolean;
};

const initialState: ShoppingCartState = {
    data: [],
    pending: false,
    error: false,
};

export const shoppingCartReducer = createReducer(initialState, builder => {
  builder
    .addCase(GetShoppingCartProducts, (state, action) => {
        
        state.data = getShoppingCartProducts(state.data, action.payload);

    })
    .addCase(AddProduct, (state, action) => {

        state.data = addProduct(state.data, action.payload);    
        
        console.log(state.data);

        console.log(state.data.length);

    })
    .addCase(DeleteProduct, (state, action) => {

        state.data = deleteProduct(state.data, action.payload);

    })
    .addCase(QuantityProduct, (state, action) => {

        state.data = quantityProduct(state.data, action.payload);

    })
});
