/* eslint no-unused-vars: "off" */
import { createSlice, createSelector } from "@reduxjs/toolkit";

import { initialLoggedInState } from "../utils/initialState";

const initialState = initialLoggedInState;

const logInSlice = createSlice({
  name: "loggedIn",
  initialState,
  reducers: {
    userLoggedIn(state, action) {
      return (state = { ...action.payload });
    },
    userLoggedOut(state, action) {
      return (state = {
        loggedIn: false,
        id: "",
        firstName: "",
        lastName: "",
        avatar: "",
      });
    },
  },
});

export const selectLoggedInUser = ({ loggedIn }) => loggedIn;

export const { userLoggedIn, userLoggedOut } = logInSlice.actions;

export default logInSlice.reducer;
