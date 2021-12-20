import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import * as clientService from '../services/clientService'
import clientCard from '../components/Client_components/ClientCard'


const ClientDetails = (props) => {
  const { id } = useParams()
  const [client, setClient] = useState()
  
  useEffect(() => {
    const fetchClient = async () => {
      try {

      } catch (error) {
        throw error
      }
    }
    fetchClient()
  }, [id])
  
  return (
    <h1>Client Details</h1>
  )
}

export default ClientDetails