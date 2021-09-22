import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {userName: null}
]

const logInSlice = createSlice({
    name: 'loggedIn',
    initialState,
    reducers: {
        userLoggedIn(state, action) {
            return state = [{...action.payload}]
        }
    }
  })

export const { userLoggedIn } = logInSlice.actions

export default logInSlice.reducer