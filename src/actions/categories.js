import * as api from '../api';

export const getCategories = () => async (dispatch) => {

    try {

        const { data } = await api.fetchCategories();

        dispatch({ type: 'FETCH_ALL_CATEGORIES', payload: data?.categories});

    } catch (error) {

        console.log(error.message);
        
    }

}
