import React from 'react';

const ProjectCard = (props) => {
  console.log(props);
  return (
    <>
      <h1>{props.project.title}</h1>
      <h3>{props.project.clientList}</h3>
      <h3>Status: {props.project.is_Active}</h3>
      <h3>Start Date: {props.project.startDate}</h3>
      <h3>End Date: {props.project.endDate}</h3>
      <h3>Hourly Rate: ${props.project.hourlyRate}</h3>
    </>

  )
}

export default ProjectCard