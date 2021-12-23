import React from 'react';
import { Link } from 'react-router-dom'
// Components
import InvoiceCard from './InvoiceCard'
import'./invoiceList.scss'

const InvoiceList = ({invoices}) => {
  return (
    <div className="invoice-list">
      <h1>Invoice List</h1>
      {invoices?.map((invoice) => {
        return (
          <Link key={invoice._id} to={`/invoices/${invoice._id}`}>
            <InvoiceCard 
              invoice={invoice}
            />
          </Link>
        )
      })}
    </div>
  )
}

export default InvoiceList