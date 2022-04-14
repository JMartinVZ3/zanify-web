
export const GetShoppingCartProducts = () => async (dispatch) => {

    try {

        dispatch({ type: "GET_SHOPPING_CART_PRODUCTS"})

    } catch (error) {

        console.log(error.message)

    }
}

export const AddProduct = (product) => async (dispatch) => {

    try {

        const data = {
            "category": product.category,
            "description": product.description,
            "images_url": product.images_url,
            "price": product.price,
            "title": product.title,
            "_id": product._id,
            "quantity": 1
        }

        dispatch({ type: 'ADD_PRODUCT', payload: data});

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
