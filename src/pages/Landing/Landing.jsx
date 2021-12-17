import styles from './Landing.module.css'
import './landing.scss'

const Landing = ({ user }) => {
  return (
    <div className="container">
      <section className="one">
        <h1>First</h1>
      </section>
      <section className="two">
        <h1>Second</h1>
      </section>
      <section className="three">
        <h1>Third</h1>
      </section>
    </div>
  )
}

export default Landing
