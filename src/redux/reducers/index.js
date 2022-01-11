import { combineReducers } from 'redux'
import { projectReducer } from './projectReducer'
import { clientReducer } from './clientReducer'
import { invoiceReducer } from './invoiceReducer'

const reducers = combineReducers({
  allProjects: projectReducer,
  allClients: clientReducer,
  allInvoices: invoiceReducer,
})

export default reducers