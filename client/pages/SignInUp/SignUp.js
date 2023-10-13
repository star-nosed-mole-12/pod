import React from "react";
import { useState } from "react";

const SignUp = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async(e) =>{
    e.preventDefault()
  }
  console.log('test')
  return (
    <div>
      <div className="signup">
      <h3 className='signup'>Signup</h3>
      <form  className="signup" onSubmit={handleSubmit}>
        <label>Email: </label>
        <input type="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <label>Password: </label>
        <input type="password"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
        <button>Signup</button>
      </form>
    </div>
    </div>
  );
}
 
export default SignUp;