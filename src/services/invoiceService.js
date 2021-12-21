import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/invoices/`

export const addInvoice = async (invoice) => {
  try {
    const res = await fetch(`${BASE_URL}`, {
      method: "POST", 
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(invoice)
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}