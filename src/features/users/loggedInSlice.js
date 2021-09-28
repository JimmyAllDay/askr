import { createSlice } from "@reduxjs/toolkit";

const initialState = null

const logInSlice = createSlice({
    name: 'loggedIn',
    initialState,
    reducers: {
        userLoggedIn(state, action) {
            return state = [{...action.payload}]
        },
        userLoggedOut(state, action) {
            return state = null
        }
    }
  })

export const { userLoggedIn, userLoggedOut } = logInSlice.actions

export default logInSlice.reducer