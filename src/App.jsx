import { useState } from 'react'
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
import AddInvoice from './components/Invoice/AddInvoice'
import InvoiceList from './components/Invoice/InvoiceList'
import InvoiceDetails from './components/Invoice/InvoiceDetails'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  const [clientListStatus, setClientListStatus] = useState (false)
  const [signInFormStatus, setSignInFormStatus] = useState (false)
  const [signUpFormStatus, setSignUpFormStatus] = useState (false)
  const [clientFormStatus, setClientInFormStatus] = useState (false)
  const [projectFormStatus, setProjectInFormStatus] = useState (false)
  const [invoiceFormStatus, setInvoiceInFormStatus] = useState (false)


  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing user={user} handleLogout={handleLogout} signInFormStatus={signInFormStatus} setSignInFormStatus={setSignInFormStatus} signUpFormStatus={signUpFormStatus} setSignUpFormStatus={setSignUpFormStatus} handleSignupOrLogin={handleSignupOrLogin}/>} 
        />
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
          element={user ? <Profile user={user} clientListStatus={clientListStatus} setClientListStatus={setClientListStatus} handleLogout={handleLogout}/> : <Navigate to="/" />}
        />
        <Route
          path="/projects" 
          element={user ? <ProjectList /> : <Navigate to='/login' />}
        />
        <Route
          path="/projects/:id/edit" 
          element={user ? <UpdateProject /> : <Navigate to='/login' />}
        />
        <Route
          path="/newProject" 
          element={user ? <CreateProject /> : <Navigate to='/login' />}
        />
        <Route
          path="/projects/:id" 
          element={user ? <ProjectDetails /> : <Navigate to='/login' />}
        />
        <Route 
          path="/clients" 
          element={user ? <ClientList user={user} /> : <Navigate to='/login' />}
        />
        <Route 
          path="/newClient" 
          element={user ? <CreateClient user={user} /> : <Navigate to='/login' />}
        />
        <Route 
          path="/clients/:id"
          element={user ? <ClientDetails /> : <Navigate to='/login' />}
        />
        <Route 
          path="/clients/:id/edit"
          element={user ? <UpdateClient /> : <Navigate to='/login' />}
        />
        <Route 
          path='/newInvoice'
          element={user ? <AddInvoice /> : <Navigate to="/login"/>}
        />
        <Route 
          path='/invoices' 
          element={user ? <InvoiceList user={user} /> : <Navigate to='/login'/>}
        />
        <Route 
          path='/invoices/:id' 
          element={user ? <InvoiceDetails user={user} /> : <Navigate to="/login"/>}
        />
      </Routes>
    </>
  )
}

export default App
