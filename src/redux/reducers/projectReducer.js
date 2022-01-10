import { ActionTypes } from "../contants/action-types"

const initialState = {
  projects: []
}

export const projectReducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case ActionTypes.GET_PROJECTS:
      return state;
    default:
      return state;
  }
}