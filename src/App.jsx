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

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

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
          element={user ? <Profile user={user}/> : <Navigate to="/login" />}
        />
        <Route
          path="/projects"
          element={user ? <ProjectList /> : <Navigate to='/login' />}
        />
        <Route
          path="/newProject"
          element={user ? <CreateProject /> : <Navigate to='/login' />}
        />
        <Route
          path="/projects/:id"
          element={user ? <ProjectDetails /> : <Navigate to='/login' />}
        />
      </Routes>
    </>
  )
}

export default App
