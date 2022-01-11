import  { ActionTypes } from '../contants/action-types'
import {getAllProjects} from '../../services/projectService'

export const fetchProjects = () => async (dispatch) => {
  const response = await getAllProjects()
  console.log(response);
  dispatch({type: ActionTypes.FETCH_PROJECTS, payload: response})
}


export const setProjects = (projects) => {
  return {
    type: ActionTypes.SET_PROJECTS,
    payload: projects
  }
}
