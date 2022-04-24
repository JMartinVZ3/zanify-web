import * as api from '../api';

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

        console.log(data);

        dispatch({ type: 'ADD_PRODUCT', payload: data});

    } catch (error) {

        console.log(error.message);
        
    }

}

export const DeleteProduct = (product) => async (dispatch) => {

    try {

        dispatch({ type: 'DELETE_PRODUCT', payload: product});

    } catch (error) {

        console.log(error.message);
        
    }

}

export const QuantityProduct = (product) => async (dispatch) => {

    try {

        const data = {
            "category": product.category,
            "description": product.description,
            "images_url": product.images_url,
            "price": product.price,
            "title": product.title,
            "_id": product._id,
            "quantity": product.quantity
        }

        dispatch({ type: 'QUANTITY_PRODUCT', payload: data});

    } catch (error) {

        console.log(error.message);
        
    }

}

export const PostOrder = () => async (dispatch) => {
    
    try {

        const data = {
            "client": {
                "name": "Martin",
                "lastName": "Veliz"
            },
            "products": [
                {
                    "product": "61f5b76ec42386c70c486514",
                    "quantity": 2
                },
                {
                    "product": "61f9b2eb916daf000efbc0b2",
                    "quantity": 1
                },
                        {
                    "product": "61f5b76ec42386c70c486514",
                    "quantity": 1
                }
            ]
        }

        const info = await api.postOrder(data);

        console.log(info);

        dispatch({ type: 'POST_PRODUCT', payload: data});
    } catch (error) {

        console.log(error.message);

    }
}