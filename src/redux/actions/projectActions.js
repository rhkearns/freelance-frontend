import  { ActionTypes } from '../contants/action-types'

export const setProjects = (projects) => {
  return {
    type: ActionTypes.SET_PROJECTS,
    payload: projects
  }
}

export const addProject = (project) => {
  return {
    type: ActionTypes.ADD_PROJECT,
    payload: project
  }
}

export const updateProjects = (project) => {
  return {
    type: ActionTypes.UPDATE_PROJECTS,
    payload: project
  }
}