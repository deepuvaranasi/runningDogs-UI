import React  from "react";
import Navbar  from "../components/Navbar";
 import Hero from "../components/Hero"
import HomeExtension from "../components/HomeExtension";
import Footer from "../components/Footer";
 function Home(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero" 
        heroImg = ".\images\homepic_3.png"
        title="Hos oss är hundens hälsa i fokus"
        />
        <HomeExtension/>
        <Footer/>
        </>
    )
 }
 export default Home;