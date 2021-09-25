import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';
import loggedInReducer from '../features/users/loggedInSlice';
import questionsReducer from '../features/questions/questionsSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    loggedInUser: loggedInReducer,
    questions: questionsReducer
  },
});
