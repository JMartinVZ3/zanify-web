import * as api from '../api';

export const getCategories = (shopName, userName) => async (dispatch) => {

    try {

        const { data } = await api.fetchCategories(shopName, userName);

        dispatch({ type: 'FETCH_ALL_CATEGORIES', payload: data?.categories});

    } catch (error) {

        console.log(error.message);
        
    }

}
