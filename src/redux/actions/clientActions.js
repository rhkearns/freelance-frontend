import { ActionTypes } from "../contants/action-types";
import { getAllClients } from '../../services/clientService'

export const fetchClients = () => async (dispatch) => {
  const response = await getAllClients()
  dispatch({type: ActionTypes.FETCH_CLIENTS, payload: response})
}

export const setClients = (clients) => {
  return {
    type: ActionTypes.SET_CLIENTS,
    payload: clients
  }
} 