import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authenticate } from './requests';
import { authenticationSuccess } from './authSlice';

const useAuthenticateUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [requestFinished, setRequestFinished] = useState(null);
  const dispatch = useDispatch();

  const authenticateUser = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await authenticate(data);
      if (response.status !== 200 && response.status !== 201) {
        setError('Failed to authenticate');
        setRequestFinished(false);
        throw new Error('Failed to authenticate');
      }
      const authenticationData = response.data;
      dispatch(authenticationSuccess(authenticationData));
      setRequestFinished(true);
    } catch (er) {
      setError(er);
      setRequestFinished(false);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    requestFinished,
    authenticateUser,
  };
};

export default useAuthenticateUser;
