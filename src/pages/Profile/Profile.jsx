import React from 'react';
import ProjectList from '../ProjectList';
import './profile.scss'

const Profile = ({user, projects}) => {
  
  
  return (
    <div className="prof-page">
      <div className="profile-card">
        <h3>{user.name}</h3>
      </div>
      <section className="project-container">
        <div style={{color: "black"}}className="project">
          <ProjectList user={user} projects={projects}/>
        </div>
      </section>
      <div className="clients">
        <h1>Client List</h1>
      </div>
    </div>
  )
}

export default Profile

