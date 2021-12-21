import React from 'react';
import moment from 'moment'

const InvoiceCard = (props) => {
  console.log(props);
  return (
    <>
      <h1>{props.invoice.title}</h1>
      <h3>Client: {props.invoice.clientList.name}</h3>
      <h3>Date Created: {moment(props.invoice.dateCreated).format('MM/DD/YYYY')}</h3>
      {props.invoice.dueDate && 
        <h3>Due Date: {moment(props.invoice.dueDate).format('MM/DD/YYYY')}</h3>
      }
      <h3>Hourly Rate: {props.invoice.hourlyRate}</h3>
      <h3>Hours Worked: {props.invoice.hoursWorked}</h3>
    </>
  )
}

export default InvoiceCard