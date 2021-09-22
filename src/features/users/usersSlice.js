import { createSlice } from '@reduxjs/toolkit'
import avatar1 from '../../assets/images/avatar1.png'

const initialState = [
  { id: '1', firstName: 'James', lastName: 'Marshall', avatar: avatar1 },
  { id: '2', firstName: 'Hugh', lastName: 'McKenzie', avatar: avatar1 },
  { id: '3', firstName: 'Gemma', lastName: 'Nicholas', avatar: avatar1 }
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