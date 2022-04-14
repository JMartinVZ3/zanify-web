export default (shoppingCart = [], action) => {

    switch (action.type) {

        case 'ADD_PRODUCT':

            const  element = shoppingCart.find(element => element._id === action.payload._id)

            if (element =! null) {
                return [...shoppingCart.map((product) => (product._id === element._id ? product.quantity++ : product))]
            } else {
                return [...shoppingCart, action.payload]
            }

        case 'DELETE_PRODUCT':

            return action.payload;

        case 'SUM_PRODUCT':

            return action.payload;

        case 'MINUS_PRODUCT':

            return action.payload;

        default:

            return shoppingCart;

    }

}