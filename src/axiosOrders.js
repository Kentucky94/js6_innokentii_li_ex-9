import axios from 'axios';

const axiosOrders = axios.create({
  baseURL: 'https://ex-9-innokentii-li-contacts.firebaseio.com/',
});

export default axiosOrders;