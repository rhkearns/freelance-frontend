import React from 'react';
import { useNavigate } from 'react-router-dom'

const CardActions = (props) => {
  const navigate = useNavigate()
  
  return (
    <>
      <button onClick={() => navigate(`/projects/${props.project._id}/edit`)}>
          Update Project
      </button>
      <button>
        Mark Project Complete
      </button>
    </>
  )
}

export default CardActions