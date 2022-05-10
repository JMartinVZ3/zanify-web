

export default (shoppingCart = [], action) => {

    switch (action.type) {

        case 'GET_SHOPPING_CART_PRODUCTS':

        let newList = []

        for (let i = 0; i < action.payload.length; i++) {
            const productFind = shoppingCart.filter((product) => product.category === action.payload[i]._id)
            newList = newList.concat(productFind);
            console.log(newList);
        }

        return newList;

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

            return shoppingCart.filter((product) => product._id !== action.payload._id);

        case 'QUANTITY_PRODUCT':

            return shoppingCart.map((product) => (product._id === action.payload._id ? action.payload : product));;

        default:

            return shoppingCart;

    }

}