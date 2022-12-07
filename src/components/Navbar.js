import React from "react";
import"./NavbarStyle.css"
import {Component} from 'react'
import {MenuItems} from './MenuItems'
import { Link } from "react-router-dom";

class Navbar extends Component {

  state = {clicked:false};
  handleClick=()=>{
    this.setState({clicked:!this.state.clicked })
  }  
  render(){
    return(
    <nav className="NavbarItems">
         <img className="navbar-logo" src=".\images\rd-logo.png" alt="logo"></img>

         <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ?"fas fa-times" : "fas fa-bars"}></i>
         </div>

         <ul className={this.state.clicked ? "nav-menu active": "nav-menu"}> 
            {MenuItems.map((item,index)=>{
                return(
                    <li>
                    <Link className={item.cName}  to={item.URL}>
                <i className={item.icon}></i>{item.title}
                    </Link>
                </li>
                )
            })}
            
                       
         </ul>
    </nav>
  )
}
}

export default Navbar