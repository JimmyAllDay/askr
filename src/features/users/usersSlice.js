import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', firstName: 'James', lastName: 'Marshall' },
  { id: '2', firstName: 'Hugh', lastName: 'McKenzie'},
  { id: '3', firstName: 'Gemma', lastName: 'Marshall'}
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
      userAdded(state, action) {
        state.push(action.payload)
    }
  }
})

export const { userAdded } = usersSlice.actions

export default usersSlice.reducer