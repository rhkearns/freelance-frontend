import { combineReducers } from 'redux'
import { projectReducer } from './projectReducer'
import { clientReducer } from './clientReducer'

const reducers = combineReducers({
  allProjects: projectReducer,
  allClients: clientReducer,
})

export default reducers