import React from 'react';

const InvoiceActions = (props) => {
  return (
    <>
      <button onClick={() => props.markInvoicePaid(props.invoice._id)}>
        {props.invoice.is_Paid ? "Mark As Pending" : "Mark As Paid"}
      </button>
    </>
  )
}

export default InvoiceActions