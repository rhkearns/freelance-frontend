import React from 'react';
import ProjectList from '../ProjectList';
import './profile.scss'

const Profile = ({user}) => {
  
  
  return (
    <>
      <div className="profile-card">
        <h3>{user.name}</h3>
      </div>
      <div className="project-list">
        <ProjectList user={user}/>
      </div>
      <div className="clients">
        <h1>Client List</h1>
      </div>
    </>
  )
}

export default Profile

