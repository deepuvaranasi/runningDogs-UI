import React from 'react'
import Navbar from '../components/Navbar'
import "../components/LoginStyles.css"
import Footer from '../components/Footer'

const Login = () => {
  const handleFormSubmit=(event)=>{
  event.preventDefault();
  }
  return (
    <>
    <Navbar/>
    <div className='container'>     
    <div className='app-wraper'>
      <div>
      <img className="login-logo" src=".\images\rd-logo.png" alt="logo"></img>
      </div>
      <form className='form-wrapper'>
        <div className='username'>
      <i class="fa-solid fa-user"></i>
    <input className='username' type="email" placeholder='username/Email'></input>
    </div>
    <div className='password'>
    <i class="fa-solid fa-lock"></i>
    <input className='password' type="password" placeholder='password'></input>
    </div>
    <div className='btn'>   
    <button className="btn-signup">Sign Up</button>
    </div>
    <div>
    <button className="submit" onClick={handleFormSubmit}>Login</button> 
    </div>
    </form>    
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Login