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
              <li><button className='sign-in-button' onClick={() => setSignInFormStatus(!signInFormStatus)}>SignIn</button></li>
              <li><button className="sign-up-button" onClick={() => setSignUpFormStatus(!signUpFormStatus)}>Create Account</button></li>
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
          </div>
        </div>
      </section>
      <section className="spacer1"></section>
      <section className="two">
        <p className='Testimony'>Stay organized, on track and on top of your projects!</p>
      </section>
      <section className="spacer2"></section>
      <section className="three">
        <h1 className='CTA'>Start your Folio today!</h1>
        <h2>Whether you have previous work looking for an organized place to live, or are looking to have a great tool in your work as a freelancer, you can do it all with Folio. </h2>
        <h1>Get Started</h1>
      </section>
    </div>
  )
}

export default Landing
