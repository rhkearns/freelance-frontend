import { createSlice } from '@reduxjs/toolkit'

export const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    value: [],
  },
  reducers: {
    getProjects: (state) => {
      console.log('projectsSlice getProjects');
    },
    addProject: (state) => {
      console.log('projectsSlice addProject');
    },
    updateProject: (state) => {
      console.log('projectsSlice updateProject');
    },
  }
})

export const { getProjects, addProject, updateProject } = projectsSlice.actions
export default projectsSlice.reducer