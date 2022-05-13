import { createReducer } from '@reduxjs/toolkit';
import {
  GetShoppingCartProducts,
  AddProduct,
  DeleteProduct,
  QuantityProduct,
  PostOrder,
} from './actions';

type ShoppingCartState = {
    data: Array<any>;
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
        
        let newList: any[] = <any>[];

        for (let i = 0; i < action.payload.length; i++) {
            const productFind = state.data.filter((product: any) => product.category === action.payload[i]._id)
            newList = newList.concat(productFind);
            console.log(newList);
        }
        
        state.data = newList;

    })
    .addCase(AddProduct, (state, action) => {

        const data = {
            "category": action.payload.category,
            "description": action.payload.description,
            "images_url": action.payload.images_url,
            "price": action.payload.price,
            "title": action.payload.title,
            "_id": action.payload._id,
            "quantity": 1
        }

       console.log(data);

       let productFind = state.data.find((element: {_id: string}) => 
       element._id === data._id
       );

       if (productFind === undefined) {
           console.log(data);
           state.data = [...state.data, data];

       } else if (productFind.quantity < 9) {
            productFind.quantity++
            state.data = state.data.map((product: {_id: string}) => (product._id === productFind._id ? productFind : product));
        }


    })
    .addCase(DeleteProduct, (state, action) => {

        state.data = state.data.filter((product: {_id: string}) => product._id !== action.payload._id);

    })
    .addCase(QuantityProduct, (state, action) => {

        const data = {
            "category": action.payload.category,
            "description": action.payload.description,
            "images_url": action.payload.images_url,
            "price": action.payload.price,
            "title": action.payload.title,
            "_id": action.payload._id,
            "quantity": action.payload.quantity
        }

        state.data = state.data.map((product: {_id: string}) => (product._id === data._id ? data : product));

    })
});
