import { createAsyncThunk } from '@reduxjs/toolkit';
import { createAction } from "@reduxjs/toolkit"

import * as api from '../../api';

export const GetShoppingCartProducts = createAction<Array<any>>('shoppingCart/getProducts');

export const AddProduct = createAction<any>('shoppingCart/AddProduct');

export const DeleteProduct = createAction<any>('shoppingCart/deleteProduct');

export const QuantityProduct = createAction<any>('shoppingCart/quantityProduct');

type ProductsListProps = {
    product: any;
    quantity: any;
}

export const PostOrder = createAsyncThunk<any>('shoppingCart/postOrder', async ({name, lastName, products, shopId} : any ) => {

    try {

        const data = {
            "client": {
                "name": name,
                "lastName": lastName
            },
            "products": products
        }

        const info = await api.postOrder(data, shopId);

        console.log(info);

        return data;

    } catch (error: any) {

        console.log(error.message);

    }

});
