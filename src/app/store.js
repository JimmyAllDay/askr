import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';
import loggedInReducer from '../features/users/loggedInSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    loggedInUser: loggedInReducer
  },
});
