import axios from 'axios';

const url = 'http://localhost:3000/api/v1/';

export const fetchCategories = () => axios.get(url + "products/shop/61f5b1baed47860e005caadb");

export const postOrder = (data) => axios.post(url + "orders/new/61f5b1baed47860e005caadb", data);