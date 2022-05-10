import axios from 'axios';

const url = 'http://localhost:3000/api/v1/';

export const fetchCategories = (shopName, userName) => axios.get(url + `categories/shop/${shopName}/${userName}`);

export const postOrder = (data, shopId) => axios.post(url + `orders/new/${shopId}`, data);