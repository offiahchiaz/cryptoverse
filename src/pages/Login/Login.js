import { useState } from "react"




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
          <h1 className="">Cryptoverse</h1>
          <h5>Crypotverse gives you access to the best projects out there with amazing analysis</h5>
        </div>
        <div className="col-md-4">
          <form onSubmit={handleSubmit}>
            <h2 className="mb-3">Login</h2>

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
            <button className="btn btn-primary">Login</button>
          </form>
        </div>
    </div>
    </div>
  )
}
