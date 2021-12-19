import React from 'react';
import ProjectList from '../ProjectList';
import './profile.scss'

const Profile = ({user, projects}) => {
  
  
  return (
    <div className="prof-page">
      <div className="prof-side-bar">
        <div className="prof-picture">

        </div>
        <div className="prof-card">
          <h1>{user.name}</h1>
        </div>
        <div className="side-nav">
          <ul>
            <li>Client List</li>
            <li>Create New Project</li>
            <li></li>
            <li>Log Out</li>
          </ul>
        </div>
      </div>
      <section className="project-container">
        <div className="project">
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

