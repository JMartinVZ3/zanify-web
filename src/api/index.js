import axios from 'axios';

const url = 'http://localhost:3000/api/v1/';

export const fetchCategories = () => axios.get(url + "categories/61f5b1baed47860e005caadb");

export const fetchProducts = (categoryId) => axios.get(url + `products/61f5b4448499da33f433ab38`);
