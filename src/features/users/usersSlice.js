import { createSlice } from '@reduxjs/toolkit'
import avatar4 from '../../assets/images/avatar4.png'
import avatar1 from '../../assets/images/avatar1.png'
import avatar2 from '../../assets/images/avatar2.png'

const initialState = [
  { id: '1', firstName: 'James', lastName: 'Marshall', avatar: avatar4},
  { id: '2', firstName: 'Hugh', lastName: 'McKenzie', avatar: avatar2},
  { id: '3', firstName: 'Gemma', lastName: 'Nicholas', avatar: avatar1}
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