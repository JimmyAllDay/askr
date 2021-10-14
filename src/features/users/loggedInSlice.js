/* eslint no-unused-vars: "off" */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
  id: "",
  firstName: "",
  lastName: "",
  avatar: "",
};

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

export const { userLoggedIn, userLoggedOut } = logInSlice.actions;

export default logInSlice.reducer;
