import { useState } from "react"
import { Link } from "react-router-dom"


import styles from './Login.module.css'



export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
  }

  return (
    <div className="container">
      <div className="row align-items-center" style={{ minHeight: "70vh" }}>
        <div className="col-md-8">
          <h1 className={styles.appname}>Cryptoverse</h1>
          <h5>Crypotverse gives you access to the best projects out there with amazing analysis</h5>
        </div>
        <div className="col-md-4">
          <div class="card p-3 shadow mb-5 bg-body rounded-3">
            <div class="card-body">
              <form onSubmit={handleSubmit}>
                {/* <h2 className="mb-3">Login</h2> */}

                <div className="mb-3">
                  <label htmlFor="loginEmail" className="form-label"> Email address</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="loginEmail" 
                    aria-describedby="emailHelp"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3">
                  <label htmlFor="loginPassword" className="form-label">Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="loginPassword"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <div class="d-grid gap-2">
                  <button className="btn btn-primary"><h5>Log In</h5></button>
                </div>
                <hr />
                <div class="d-grid gap-2 col-6 mx-auto">
                  <Link to="/signup" className="btn btn-dark"><h6>Create New Account</h6></Link>
                </div>
                
              </form>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}
