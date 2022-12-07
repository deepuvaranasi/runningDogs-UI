import React from 'react';
import Navbar  from "../components/Navbar";
 import Hero from "../components/Hero"
 import Footer from "../components/Footer";
//import { Component } from "react";

function Contact(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-contact" 
        heroImg = ".\images\contactus.jpg"
        title="Kontakta Oss"        
        />
        <Footer/>
        </> 
    )
 }
 export default Contact;