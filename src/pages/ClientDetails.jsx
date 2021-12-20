import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import * as clientService from '../services/clientService'
import ClientCard from '../components/Client_components/ClientCard'
import ClientActions from '../components/Client_components/ClientActions';


const ClientDetails = (props) => {
  const { id } = useParams()
  const [client, setClient] = useState()
  console.log('client', client);
  console.log('id', id);

  const handleDeleteClient = async (clientId) => {
    try {
      await clientService.deleteClient(clientId)
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const clientData = await clientService.getClientById(id)
        console.log('here', clientData);
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
      {client &&
        <ClientActions 
          client={client}
        />
      }
    </>
  )
}

export default ClientDetails