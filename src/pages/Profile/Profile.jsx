import React from 'react';
import ProjectList from '../ProjectList';

const Profile = ({user}) => {
  
  
  return (
    <>
      <h1>Profile</h1>
      <ProjectList user={user}/>
    </>
  )
}

export default Profile

