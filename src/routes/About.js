import React,{Component} from 'react';
import Navbar  from "../components/Navbar";
 import Hero from "../components/Hero";
 import Footer from "../components/Footer";

function About(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid" 
        heroImg = ".\images\aboutus-pic1.jpg"
        title="Om Running Dogs"
        title1="Hos oss är hundens hälsa i focus.
        Varmt välkommen till Running dogs - Din plattform för ett aktivare hundliv!"
       />
       <Footer/>
        </>
    )
 }
 export default About;