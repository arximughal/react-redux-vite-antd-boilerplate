import { combineReducers } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';

// combine all the slice reducers and export the root state type
const appReducer = combineReducers({
  auth: authSlice,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
