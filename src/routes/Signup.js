import React from 'react'
import {useState, useEffect, useRef} from 'react';
import Navbar from '../components/Navbar'
import "../components/SignupStyles.css"
import Footer from '../components/Footer'
import UserService from '../services/UserService'

const Signup = () => {

  const [user, setUser] = useState({
    id:"",
    username:"",
    email:"",
    phoneNumber:"",
    password:"",
    confirmpassword:""
  });
  const handleChange=(e)=>{
    const value = e.target.value;
    setUser({...user,[e.target.name]:value});
  };
  const saveUser = (e) =>{
    e.preventDefault();
    UserService.saveUser(user).then((response)=>{
      console.log(response);

    })
    .catch((error) => {
      console.log(error);
    });             
  }; 
  return (
    <>
    <Navbar/>
   <div className='container'>     
    <div className='app-wraper'>
      <div className='title'>
      <h2>Registrera som användare</h2>
      </div>
      <form className='form-wrapper'>

      <div >
      <i class="fa-solid fa-user"></i>
      <input className='username' 
              name='username' 
              value={user.username}
              onChange={(e)=>handleChange(e)} 
              type="text" 
              placeholder='Användarnamn'>
    </input>
    </div>
    <div>
    <i class="fa-solid fa-envelope"></i>
    <input className='email' 
           name='email' 
           value={user.email}
           onChange={(e)=>handleChange(e)}
           type="email" 
           placeholder='Email'>
    </input>
    </div>
    
    <div >
    <i class="fa-solid fa-mobile"></i>
    <input className='phone'
           name='phoneNumber' 
           value={user.phoneNumber} 
           onChange={(e)=>handleChange(e)}
           type="text" 
           placeholder='Mobil'>          
     </input>
    </div>
    <div>
    <i class="fa-solid fa-lock"></i>
    <input className='password'  
           name='password'  
           value={user.password} 
           onChange={(e)=>handleChange(e)}
           type="password" 
           placeholder='Lösenord'>
    </input>
    </div>

    <div>
    <i class="fa-solid fa-lock"></i>
    <input className='confirmpassword'
           name='confirmpassword' 
           value={user.confirmpassword} 
           onChange={(e)=>handleChange(e)}
           type="password"
           placeholder='Lösenord'>       
    </input>
    </div>
    <div >   
    <button  onClick={saveUser} className="btn-signup" >Sign Up</button>
    </div>    
    </form>    
    </div>
    </div>
    <Footer/>
    </>
   
  )
}

export default Signup