import { ActionTypes } from "../contants/action-types"

const initialState = {
  projects: []
}

export const projectReducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case ActionTypes.SET_PROJECTS:
      return {...state, projects: payload};
    case ActionTypes.FETCH_PROJECTS:
      return {...state, projects: payload};
    default:
      return state;
  }
}