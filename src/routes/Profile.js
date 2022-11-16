import React from 'react';
import Navbar  from "../components/Navbar";
 import Hero from "../components/Hero"
 import Footer from "../components/Footer";

function Profile(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-profile" 
        heroImg = ".\images\profile.jpg"
        title="Profile"             
        />
        <Footer/>
        </>
    )
 }
 export default Profile;