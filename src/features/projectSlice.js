import { createSlice } from '@reduxjs/toolkit'

export const projectSlice = createSlice({
  name: 'projects',
  initialState: {
    value: [],
  },
  reducers: {

  }
})

export const { } = projectSlice.actions
export default projectSlice.reducer