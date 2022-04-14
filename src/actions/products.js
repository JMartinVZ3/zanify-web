import * as api from '../api';

export const getProducts = (categoryId) => async (dispatch) => {

    try {

        const { data } = await api.fetchProducts(categoryId);

        console.log(data)

        dispatch({ type: 'FETCH_ALL_PRODUCTS', payload: data?.products, categoryId: categoryId});

    } catch (error) {

        console.log(error.message);
        
    }

}
