import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import * as clientService from '../services/clientService'
import ClientCard from '../components/Client_components/ClientCard'


const ClientDetails = (props) => {
  const { id } = useParams()
  const [client, setClient] = useState()
  
  useEffect(() => {
    const fetchClient = async () => {
      try {
        const clientData = await clientService.getClientById(id)
        setClient(clientData)
      } catch (error) {
        throw error
      }
    }
    fetchClient()
  }, [id])
  
  return (
    <>
      <h1>Client Details</h1>
      {client &&
        <ClientCard 
          client={client}
          key={client._id}
        />
      }
    </>
  )
}

export default ClientDetails