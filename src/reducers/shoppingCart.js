export default (shoppingCart = [], action) => {

    switch (action.type) {

        case 'ADD_PRODUCT':

            return action.payload;

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