import { combineReducers } from "@reduxjs/toolkit";

import usersReducer from "./features/users/usersSlice";
import loggedInReducer from "./features/users/loggedInSlice";
import questionsReducer from "./features/questions/questionsSlice";

export const rootReducer = combineReducers({
  users: usersReducer,
  loggedIn: loggedInReducer,
  questions: questionsReducer,
});
