import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './project-card.scss'

const ProjectCard = (props) => {
  const navigate = useNavigate()

  return (
    <div className='project-card'>
      <h1>{props.project.title}</h1>
      <h3>{props.project.clientList}</h3>
      <h3>Status: {props.project.is_Active}</h3>
      <h3>Start Date: {props.project.startDate}</h3>
      <h3>End Date: {props.project.endDate}</h3>
      <h3>Hourly Rate: ${props.project.hourlyRate}</h3>
      <button onClick={() => navigate(`/projects/${props.project._id}/edit`)}>
        Update Project
      </button>
    </div>

  )
}

export default ProjectCard