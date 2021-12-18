import React from 'react';
import ProjectList from '../ProjectList';

const Profile = ({user, projects}) => {
  
  
  return (
    <>
      <h1>Profile</h1>
        <ProjectList user={user} projects={projects}/>
      <h1>Client List</h1>
    </>
  )
}

export default Profile

