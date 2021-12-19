import React from 'react';
import { useNavigate } from 'react-router-dom'

const CardActions = () => {
  const navigate = useNavigate()
  
  return (
    <button onClick={() => navigate(`/projects/${props.project._id}/edit`)}>
        Update Project
      </button>
  )
}

export default CardActions