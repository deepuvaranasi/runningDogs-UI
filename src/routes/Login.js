import React from 'react'
import Navbar from '../components/Navbar'
import "../components/LoginStyles.css"

const Login = () => {
  return (
    <>
    <Navbar/>
    <div className='cover'>
    <img className="login-logo" src=".\images\rd-logo.png" alt="logo"></img>
    <input type="email" placeholder='username'></input>
    <input type="password" placeholder='password'></input>
    <button className="btn-login">Login</button> 
    <button className="btn-signup">Sign Up</button>
    </div>
    </>
  )
}

export default Login