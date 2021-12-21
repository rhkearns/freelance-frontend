import React from 'react';
import ProjectList from '../ProjectList';
import ClientList from '../ClientList';
import './profile.scss'

const Profile = ({user, projects, clients, clientListStatus, setClientListStatus}) => {
  
  console.log(clientListStatus)

  return (
    <div className="prof-page">
      <div className="header">
        <button className="prof-toggle">Icon</button>
      </div>
      <div className="prof-side-bar">
        <div className="prof-picture">
        </div>
        <div className="prof-card">
          <h1>{user.name}</h1>
        </div>
        <div className="side-nav">
            <br/><br/>
            <p><button onClick={() => setClientListStatus(!clientListStatus)}>Client List</button></p>
            <br/><br/>
            <p>Create New Project</p>
            <br/><br/>
            <p>Another Link</p>
            <br/><br/>
            <p>Log Out</p>
        </div>
      </div>
      <section className="project-container">
        <div className="project-list">
          {projects?.forEach(p => {
            <h1>{p.title}</h1>
          })}
        </div>
      </section>
      <div className={`clients ${clientListStatus ? "active-list" : "inactive-list"}`}>
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


{/* <div className="project">
{projects?.map((p)=> (
  
    title={p.title}
    startDate={p.startDate}
    endDate={p.endDate}
  
))} */}