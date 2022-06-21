import * as api from '../../services/api';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const GetCategories = createAsyncThunk('category/getCategories', async ({userName, shopName} : {userName: string, shopName: string}) => {

    try {

        console.log("haciendo llamada")

        const { data } = await api.fetchCategories(shopName, userName);

        console.log("esta es la data")
        console.log(data);
        
        return data?.categories;

    } catch (error: any) {

        console.log(error.message);
        
        return []
    }

});
