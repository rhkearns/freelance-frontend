import React from 'react';
import ProjectList from '../ProjectList';
import ClientList from '../ClientList';
import './profile.scss'

const Profile = ({user, projects, clients, clientListStatus, setClientListStatus}) => {
  
  

  return (
    <div className="prof-page">
      <div className="prof-side-bar">
        <div className="prof-picture">
          <div className="circle"></div>
        </div>
        <div className="prof-card">
          <h1>{user.name}</h1>
        </div>
        <div className="side-nav">
          <ul>
            <br/><br/><br/><br/>
            <li>Client List</li>
            <br/><br/><br/><br/><br/>
            <li>Create New Project</li>
            <br/><br/><br/><br/><br/>
            <li>Another Link</li>
            <br/><br/><br/><br/><br/>
            <li>Log Out</li>
          </ul>
        </div>
      </div>
      <section className="project-container">
        <div className="project">
          <ProjectList user={user} projects={projects}/>
        </div>
      </section>
      <div className={`clients`}>
        <h1>Client List</h1>
          <ClientList user={user} clients={clients} />
      </div>
    </div>
  )
}

export default Profile

// {`clients ${active ? "selected" : ""}`} this is the logic for toggling the class name for the client list toggle

// stubbed up function:

// const clientSelectHandler = async () => {
//   const selectedClient = clients.filter((state) => state.id === id)
//   await setCurrentClient({...selectedClient[0]})
// }
