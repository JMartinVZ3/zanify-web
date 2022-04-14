
export const GetShoppingCartProducts = () => async (dispatch) => {

    try {

        dispatch({ type: "GET_SHOPPING_CART_PRODUCTS"})

    } catch (error) {

        console.log(error.message)

    }
}

export const AddProduct = (product) => async (dispatch) => {

    try {

        dispatch({ type: 'ADD_PRODUCT', payload: product});

    } catch (error) {

        console.log(error.message);
        
    }

}

export const DeleteProduct = () => async (dispatch) => {

    try {

        dispatch({ type: 'DELETE_PRODUCT'});

    } catch (error) {

        console.log(error.message);
        
    }

}

export const SumProduct = () => async (dispatch) => {

    try {

        dispatch({ type: 'SUM_PRODUCT'});

    } catch (error) {

        console.log(error.message);
        
    }

}

export const MinusProduct = () => async (dispatch) => {

    try {

        dispatch({ type: 'MINUS_PRODUCT'});

    } catch (error) {

        console.log(error.message);
        
    }

}
