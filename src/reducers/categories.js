export default (categories = [], action) => {

    switch (action.type) {

        case 'FETCH_ALL_CATEGORIES':

            return action.payload;

        case 'FETCH_ALL_PRODUCTS':


            return categories.map((category) => (category._id === action.categoryId ? category.products = action.payload : category)); 

        default:

            return categories;

    }

}