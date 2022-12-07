import React from 'react';
import Navbar  from "../components/Navbar";
 import Hero from "../components/Hero";
 import Footer from "../components/Footer";

function Booking(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-booking" 
        heroImg = ".\images\running_04.png"
        title="Bokning"        
        />
        <Footer/>
        </>
    )
 }
 export default Booking;