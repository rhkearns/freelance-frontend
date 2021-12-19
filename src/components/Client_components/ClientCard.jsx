import React from 'react';

const ClientCard = (props) => {
  return (
    <>
      <h1>{props.client.name}</h1>
      <h1>{props.client.email}</h1>
    </>
  )
}

export default ClientCard