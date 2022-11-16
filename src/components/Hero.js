import React from "react";
import "./HeroStyles.css"

function Hero(props){
    return(
        <>
        <div className={props.cName}>
        <img alt="HeroImg" src={props.heroImg} ></img>
        <div className="hero-text">
        <h1 >{props.title}</h1>            
            <h2>{props.title1}</h2>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
            <p>{props.text3}</p>
            <p>{props.text4}</p>           
            <a href={props.url} className={props.btnClass}> {props.buttonText} </a>

        </div>
    </div>
    </>
    );
}
export default Hero;