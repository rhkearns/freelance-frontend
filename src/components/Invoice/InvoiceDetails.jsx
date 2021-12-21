import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import * as invoiceService from '../../services/invoiceService'
import InvoiceCard from './InvoiceCard';
import InvoiceActions from './InvoiceActions';

const ProjectDetails = (props) => {
  const { id } = useParams()
  const [invoice, setInvoice] = useState()

  useEffect(() => {
    const fetchInvoice = async () => {
      try {
        const invoiceData = await invoiceService.getInvoiceById(id)
        setInvoice(invoiceData)
      } catch (error) {
        throw error
      }
    }
    fetchInvoice()
  }, [id])

  const markInvoicePaid = async (invoiceId) => {
    try {
      const updatedInvoice = await invoiceService.markPaid(invoiceId)
      setInvoice(updatedInvoice)
      props.handleUpdateInvoiceList(updatedInvoice)
    } catch (error) {
      throw error
    }
  }

}