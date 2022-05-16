import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export const selectShoppingCart = (state: RootState) => state.shoppingCart.data;

export const shoppingCartSelector = createSelector(
    selectShoppingCart, 
    state => state
);