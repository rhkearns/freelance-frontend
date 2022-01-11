import React from 'react';
import moment from 'moment'

const InvoiceCard = (props) => {
  return (
    <div className='invoice-holder'>
      <div className="invoice">
        <h2 className='name'>{props.invoice.title}</h2>
        <h2>Payment Status: {props.invoice.is_Paid ? "Paid" : "Pending"}</h2>
        <br/>
        <h3>Client: {props.invoice.clientList.name}</h3>
        <h3>Date Created: {moment(props.invoice.dateCreated).utc().format('MM/DD/YYYY')}</h3>
        {props.invoice.dueDate && 
          <h3>Due Date: {moment(props.invoice.dueDate).utc().format('MM/DD/YYYY')}</h3>
        }
        <h3>Hourly Rate: ${props.invoice.hourlyRate}/hr</h3>
        <h3>Hours Worked: {props.invoice.hoursWorked}</h3>
        <h3>Total: ${props.invoice.invoiceTotal}</h3>
      </div>
    </div>
  )
}

export default InvoiceCard