import React from 'react';
import { useNavigate } from 'react-router-dom'

const CardActions = (props) => {
  const navigate = useNavigate()
  
  return (
    <>
      <button onClick={() => navigate(`/projects/${props.project._id}/edit`)}>
          Update Project
      </button>
      <button onClick={() => props.markProjectComplete(props.project._id)}>
      {props.project.is_Active ? "Mark Project Complete" : "Mark Project Active"}
      </button>
    </>
  )
}

export default CardActions