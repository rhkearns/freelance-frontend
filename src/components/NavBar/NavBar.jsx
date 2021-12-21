import { Link } from 'react-router-dom'
import './navBar.scss'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <ul className="user-nav">
            {/* <li>Welcome, {user.name}</li> */}
            <li><Link to="/projects"> Eventual Home Link </Link></li>
            <li><Link to="/profile">Profile</Link></li>
            {/* <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/clients">Clients</Link></li>
            <li><Link to="/newProject">Add A Project</Link></li>
            <li><Link to="/newClient">Add A Client</Link></li> */}
            <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
          </ul>
        </nav>
      :
        <nav>
          <ul className="reg-nav">
            <li><Link to="/projects"> Eventual Home Link </Link></li>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
