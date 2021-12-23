import { Link } from 'react-router-dom'

import SignInForm from '../../components/Forms/signInForm'
import SignUpForm from '../../components/Forms/signUpForm'

import './landing.scss'

const Landing = ({ user, handleLogout, signInFormStatus, setSignInFormStatus,  handleSignupOrLogin, signUpFormStatus, setSignUpFormStatus}) => {
  return (
    <div className="container">
      <div className="navigation">
        {user ? 
          <div className="user-nav">
            <ul>
              <li className="prof"><Link to="/profile">View Profile</Link></li>
              <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
            </ul>
          </div>
        :
          <div className="reg-nav">
            <ul>
              <li><button onClick={() => setSignInFormStatus(!signInFormStatus)}>Form Trigger SignIn</button></li>
              
            </ul>
          </div>
        }
      </div>
      
      <section className="one">
        <div className="title-info">
          <br/>
          <br/>
          <br/>
          {!user && signInFormStatus &&
            <div className={`sign-in-form ${signInFormStatus ? "active-sign-in" : "inactive-sign-in"}`}>
              <SignInForm 
                handleSignupOrLogin={handleSignupOrLogin}
                />
            </div>
          }
          {!user && signUpFormStatus &&
            <div className={`sign-up-form ${signUpFormStatus ? "active-sign-up" : "inactive-sign-up"}`}>
              <SignUpForm
                handleSignupOrLogin={handleSignupOrLogin}
                />
            </div>
          }
          
          <div className="blur">
          <h1>Folio</h1>
          <br/>
          <h2>An App for Freelancers</h2>
          <br/><br/>
          <p className="short-desc">A way to simplify your life with the ability to store your past and current projects and clients</p>
          <button className="sign-up-button" onClick={() => setSignUpFormStatus(!signUpFormStatus)}>Create Account</button>
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
