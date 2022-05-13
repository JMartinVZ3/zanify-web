import axios from 'axios';

const url = 'http://localhost:3000/api/v1/';

export const fetchCategories = (shopName: string, userName: string) => axios.get(url + `categories/shop/${shopName}/${userName}`);

export const postOrder = (data: any, shopId: string) => axios.post(url + `orders/new/${shopId}`, data);