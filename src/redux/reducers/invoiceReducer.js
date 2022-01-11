import { ActionTypes } from "../contants/action-types";

const initialState = {
  invoices: []
}

export const invoiceReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.SET_INVOICES:
      return {...state, invoices: payload};
    case ActionTypes.FETCH_INVOICES:
      return {...state, invoices: payload};
    default:
      return state;
  }
}