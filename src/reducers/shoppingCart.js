export default (shoppingCart = [], action) => {

    switch (action.type) {

        case 'ADD_PRODUCT':

            let productFind = shoppingCart.find((element) => 
                element._id === action.payload._id
            );

            if (productFind === undefined) return [...shoppingCart, action.payload];

            if (productFind.quantity < 9) {
                productFind.quantity++
            }
            
            return shoppingCart.map((product) => (product._id === productFind._id ? productFind : product));


        case 'DELETE_PRODUCT':

            return action.payload;

        case 'QUANTITY_PRODUCT':

            return shoppingCart.map((product) => (product._id === action.payload._id ? action.payload : product));;

        default:

            return shoppingCart;

    }

}