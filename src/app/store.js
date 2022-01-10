import { configureStore } from '@reduxjs/toolkit'
import projectsSlice from '../features/projectSlice'

export default configureStore({
  reducer: {
    projects: projectsSlice
  },
})