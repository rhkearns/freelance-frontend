import  { ActionTypes } from '../contants/action-types'

export const getProjects = (projects) => {
  return {
    type: ActionTypes.GET_PROJECTS,
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