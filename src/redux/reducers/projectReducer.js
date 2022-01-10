import { ActionTypes } from "../contants/action-types"
// import * as projectService from '../../services/projectService'

// const fetchProjects = async () => {
//   const projectData = await projectService.getAllProjects()
// }

const initialState = {
  projects: []
}

export const projectReducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case ActionTypes.SET_PROJECTS:
      return {...state, projects: payload};
    default:
      return state;
  }
}