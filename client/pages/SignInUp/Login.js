import React from "react";
import { useState } from "react";

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async(e) => {
    e.preventDefault()
  }

  return ( 
    <div>
      <h3>Login</h3>
      <form className='login' onSubmit={handleSubmit}>
        <label>Email/ Username: </label>
        <input type="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <label>Password: </label>
        <input type="password"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
        <button>Login</button>
      </form>
    </div>
  );
}
 
export default Login;