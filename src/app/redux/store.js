import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../../features/counter/counterSlice';
import loadingReducer from './loadingSlice';
import adminAuthReducer from './adminAuthSlice';
import userAuthReducer from './userAuthSlice';
import commonReducer from './commonSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    loading: loadingReducer,
    adminAuth: adminAuthReducer,
    userAuth: userAuthReducer,
    common:commonReducer
  },
});
