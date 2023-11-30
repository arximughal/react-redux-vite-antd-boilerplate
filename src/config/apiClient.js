import axios from 'axios';
import storeObject from '../store';

const client = axios.create({
  // baseUrl can be modified in the .env file; it must be defined for the client to make the calls
  baseURL: process.env.REACT_APP_BASE_API_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*', // can be configured as needed
  },
});

client.interceptors.request.use(
  (config) => {
    // access the store object outside the redux/react scope
    const authObject = storeObject.getState('auth');
    if (authObject) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${authObject?.auth?.authToken}`; // auto add Bearer token to each request dispatched using this client
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default client;
