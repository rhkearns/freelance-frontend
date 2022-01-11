import { ActionTypes } from "../contants/action-types";
import { getAllInvoices } from "../../services/invoiceService";

export const fetchInvoices = () => async (dispatch) => {
  const response = await getAllInvoices()
  dispatch({type: ActionTypes.FETCH_INVOICES, payload: response})
}

export const setInvoices = (invoices) => {
  return {
    type: ActionTypes.SET_INVOICES,
    payload: invoices
  }
}