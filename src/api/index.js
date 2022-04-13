import axios from 'axios';

const url = 'http://localhost:3000/api/v1/';

export const fetchCategories = () => axios.get(url + "categories/61f5b1baed47860e005caadb");

export const fetchProducts = () => axios.get(url + "posts/61f5b1baed47860e005caadb");
