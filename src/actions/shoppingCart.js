

export const AddProduct = () => async (dispatch) => {

    try {

        const { data } = await api.fetchCategories();

        dispatch({ type: 'ADD_PRODUCT', payload: data?.categories});

    } catch (error) {

        console.log(error.message);
        
    }

}

export const DeleteProduct = () => async (dispatch) => {

    try {

        const { data } = await api.fetchCategories();

        dispatch({ type: 'DELETE_PRODUCT', payload: data?.categories});

    } catch (error) {

        console.log(error.message);
        
    }

}

export const SumProduct = () => async (dispatch) => {

    try {

        const { data } = await api.fetchCategories();

        dispatch({ type: 'SUM_PRODUCT', payload: data?.categories});

    } catch (error) {

        console.log(error.message);
        
    }

}

export const MinusProduct = () => async (dispatch) => {

    try {

        const { data } = await api.fetchCategories();

        dispatch({ type: 'MINUS_PRODUCT', payload: data?.categories});

    } catch (error) {

        console.log(error.message);
        
    }

}
