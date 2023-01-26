import axios from 'axios';

let URL = 'https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name&orderBy=ASC';

const products = axios.create({
    baseURL: URL,
    headers: {
        timeout: 1000,
    },
});


export default products;