import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchClients } from '../redux/actions/clientActions'
// Components
import ClientCard from '../components/Client_components/ClientCard'

const ClientList = () => {
  const clients = useSelector((state) => state.allClients.clients)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchClients())
  })
  
  return (
    <>
      <h1>Clients</h1>
      {clients?.map((client) => (
        <Link key={client._id} to={`/clients/${client._id}`} >
          <ClientCard
            client={client}
          />
        </Link>
      ))}
    </>
  )
}

export default ClientList