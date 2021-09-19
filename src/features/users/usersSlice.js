import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', name: 'James Marshall' },
  { id: '2', name: 'Hugh McKenzie'},
  { id: '3', name: 'Gemma Nicholas'}
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export default usersSlice.reducer