import { Link } from 'react-router-dom'
import SignInForm from '../../components/Forms/signInForm'

import './landing.scss'

const Landing = ({ user, handleLogout, signInFormStatus, setSignInFormStatus }) => {
  return (
    
    <div className="container">
      <div className="navigation">
        {user ? 
          <div className="user-nav">
            <ul>
              <li><Link to="/profile">View Profile</Link></li>
              <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
            </ul>
          </div>
        :
          <div className="reg-nav">
            <ul>
            <li><Link to="/login">Log In</Link></li>
            <button onClick={() => setSignInFormStatus(!signInFormStatus)}>Form Trigger</button>
            <li><Link to="/signup">Sign Up</Link></li>
            </ul>
          </div>
        }
      </div>
      <section className="one">
        <div className="title-info">
          <br/>
          <br/>
          <br/>
          <h1>Folio</h1>
          <h2>An App for Freelancers</h2>
          <div className={`sign-in-form ${signInFormStatus ? "sign-in" : ""}`}>
            <SignInForm />
          </div>
        </div>
      </section>
      <section className="spacer1"></section>
      <section className="two">
        <h1>Second</h1>
      </section>
      <section className="spacer2"></section>
      <section className="three">
        <h1>Third</h1>
      </section>
    </div>
  )
}

export default Landing
