import React from 'react';
import { useNavigate } from 'react-router-dom'

const ClientActions = (props) => {
  const navigate = useNavigate()

  return (
    <button onClick={() => navigate(`/clients/${props.client._id}/edit`)}>
      Update Client
    </button>
  )
}

export default ClientActions