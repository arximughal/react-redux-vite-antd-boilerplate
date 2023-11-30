import client from '../../config/apiClient';

export const authenticate = (data) => client.post('/auth/login', data);
export const logout = () => client.post('/auth/logout');
