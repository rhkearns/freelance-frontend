import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchInvoices } from '../../redux/actions/invoiceActions'
// Components
import InvoiceCard from './InvoiceCard'
import'./invoiceList.scss'

const InvoiceList = () => {

  const invoices = useSelector((state) => state.allInvoices.invoices)
  const dispatch = useDispatch()

  const linkStyle = {
    width: "10vw",
    height: "10vh",
    border: " 3px solid rgba(53, 53, 53, 0.5",
    color: "rgba(60, 110, 113, 1",
    position: "absolute",
    top: "0",
    left: "0",
    fontSize: "2vw",
    display: "flex",
    alignItems: "center"
  }

  useEffect(() => {
    dispatch(fetchInvoices())
  })

  return (
    <div className="invoice-list">
      <Link 
      to="/profile"
      style={linkStyle}
      div className="return">Return To Profile
    </Link>
      <h1>Invoice List</h1>
      <div className="invoice-listed">
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
    </div>
  )
}

export default InvoiceList