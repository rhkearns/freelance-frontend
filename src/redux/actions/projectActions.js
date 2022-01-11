import  { ActionTypes } from '../contants/action-types'
import * as projectService from '../../services/projectService'

export const fetchProjects = () => async (dispatch) => {
  const response = await projectService.getAllProjects()
  console.log(response);
  dispatch({type: ActionTypes.FETCH_PROJECTS, payload: response})
}


export const setProjects = (projects) => {
  return {
    type: ActionTypes.SET_PROJECTS,
    payload: projects
  }
}
