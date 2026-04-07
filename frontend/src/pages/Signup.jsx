import React from 'react'

const Signup = () => {
  return (
    <div>
      <form>
        <div>
            <label>Name: </label>
            <input type='text' placeholder='Enter Your Name...'/>    
        </div>
        <div>
            <label>Email: </label>
            <input type='email' placeholder='Enter Your Email...'/>    
        </div>
        <div>
            <label>Password: </label>
            <input type='password' placeholder='Enter Your Password...'/>    
        </div>
        <button type='submit'>Create Account</button>
      </form>
    </div>
  )
}

export default Signup
