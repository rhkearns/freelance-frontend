import styles from './Landing.module.css'
import './landing.scss'

const Landing = ({ user }) => {
  return (
    
    <div className="container">
    <div className="header"></div>
      <section className="one">
        <div className="title-info">
          <br/>
          <br/>
          <br/>
          <h1>Folio</h1>
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
