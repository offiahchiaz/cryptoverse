import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Signup.module.css'


export default function Signup() {

  const [email, setEmail] = useState('')
  const [password, setPassword] =  useState('')
  const [displayName, setDisplayName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password, displayName)
  }

  return (
    <div className="container">
    <div className="row align-items-center" style={{ minHeight: "90vh" }}>
      <div className="col-md-8">
        <h1 className={styles.appname}>Cryptoverse</h1>
        <h5>Crypotverse gives you access to the best projects out there with amazing analysis</h5>
      </div>
      <div className="col-md-4">
        <div class="card shadow mb-5 bg-body rounded-3">
          <div class="card-body">
            <form onSubmit={handleSubmit}>
              <h2>Sign Up</h2>
              <small>It's quick and easy.</small>
              <hr />

              <div className="mb-3">
                <label htmlFor="signupEmail" className="form-label"> Email address</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="signupEmail" 
                  aria-describedby="emailHelp"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>

              <div className="mb-3">
                <label htmlFor="signupName" className="form-label"> Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="signupName" 
                  onChange={(e) => setEmail(e.target.value)}
                  value={displayName}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="signupPassword" className="form-label">Password</label>
                <input 
                  type="password" 
                  className="form-control" 
                  id="signupPassword"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <div class="d-grid gap-2">
                <button className="btn btn-primary"><h5>Sign Up</h5></button>
                <small className='text-center'>Already have an account?</small>
              </div>
              <hr />
              <div class="d-grid gap-2 col-6 mx-auto">
                <Link to="/login" className="btn btn-dark"><h6>Log In</h6></Link>
              </div>
              
            </form>
          </div>
        </div>
      </div>
  </div>
  </div>
  )
}
