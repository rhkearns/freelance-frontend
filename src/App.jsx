import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import * as authService from './services/authService'
import ProjectList from './pages/ProjectList'
import CreateProject from './pages/CreateProject/CreateProject'
import ProjectDetails from './pages/ProjectDetails'
import Profile from './pages/Profile/Profile'
import UpdateProject from './pages/UpdateProject/UpdateProject'
import ClientList from './pages/ClientList'
import CreateClient from './pages/AddClient/AddClient'
import ClientDetails from './pages/ClientDetails'
import UpdateClient from './pages/UpdateClient/UpdateClient'
import * as projectService from './services/projectService'
import * as clientService from './services/clientService'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  const [projects, setProjects] = useState([])
  const [clients, setClients] = useState([])

  const [clientListStatus, setClientListStatus] = useState (false)


  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleUpdateProjectsList = (updatedProject) => {
    console.log('in app');
    const updatedArray = projects.map(project => 
      project._id === updatedProject._id ? updatedProject : project
    )
    setProjects(updatedArray)
  }

  const handleUpdateClientsList = (updatedClient) => {
    console.log('in app');
    const updatedArray = clients.map(client => 
      client._id === updatedClient._id ? updatedClient : client
    )
    setClients(updatedArray)
  }


  useEffect(() => {
    const fetchProjects = async () => {
      const projectData = await projectService.getAllProjects()
      setProjects(projectData)
    }
    const fetchClients = async () => {
      const clientData = await clientService.getAllClients()
      setClients(clientData)
    }
    fetchProjects()
    fetchClients()
    return () => { 
      setProjects([]) 
      setClients([])
    }
  }, [])

  console.log('projects', projects);

  return (
    <div className="App">
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profile"
          element={user ? <Profile user={user} projects={projects} clients={clients} clientListStatus={clientListStatus} setClientListStatus={setClientListStatus}/> : <Navigate to="/login" />}
        />
        <Route
          path="/projects"
          element={user ? <ProjectList projects={projects} setProjects={setProjects}/> : <Navigate to='/login' />}
        />
        <Route
          path="/projects/:id/edit"
          element={user ? <UpdateProject 
            handleUpdateProjectsList={handleUpdateProjectsList}/> 
            : 
            <Navigate to='/login' />}
        />
        <Route
          path="/newProject"
          element={user ? <CreateProject projects={projects} setProjects={setProjects}/> : <Navigate to='/login' />}
        />
        <Route
          path="/projects/:id"
          element={user ? <ProjectDetails projects={projects} setProjects={setProjects} handleUpdateProjectsList={handleUpdateProjectsList}/> : <Navigate to='/login' />}
        />
        <Route 
          path="/clients"
          element={user ? <ClientList user={user} clients={clients}/> : <Navigate to='/login' />}
        />
        <Route 
          path="/newClient"
          element={user ? <CreateClient user={user} clients={clients} setClients={setClients}/> : <Navigate to='/login' />}
        />
        <Route
          path="/clients/:id"
          element={user ? <ClientDetails clients={clients} setClients={setClients}/> : <Navigate to='/login' />}
        />
        <Route
          path="/clients/:id/edit"
          element={user ? <UpdateClient 
            handleUpdateClientsList={handleUpdateClientsList}/> 
            : 
            <Navigate to='/login' />}
        />
      </Routes>
    </div>
  )
}

export default App
