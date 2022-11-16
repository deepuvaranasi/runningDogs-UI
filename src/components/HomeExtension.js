import React from "react";
import "./HomeExtensionStyle.css"

const HomeExtension = () =>{
    return(
        <div className="homeExtension">
            <h2>"Kom igång idag!"</h2>
            <p>Låt oss hjälpa dig med din hunds fysiska motion.</p>
            <p>Vi löptränar din hund utifrån era önskemål och hundens förutsättningar.</p>
            <p>Läs mer om löpträningen här</p>
            <input className="input-text" type="text" placeholder="eg:Gotaland"></input>
            <button className="btn1">Boka en Dogrunner</button>
            <div className="container">
            <div className="dogrunner">
              <img className="img1" alt="img1" src=".\images\dogrunner.png"></img>
                <h2>Bli en Dogrunner</h2>
                <p>Älskar du hundar, har hundvana och gillar att löpträna?</p>
                <p>Då kan du bli en av oss!</p>
                <p>Fyll i vårt fomulär och anmäl ditt intresse idag.</p>
                <button className="btn2" >Jag vill bli en Dogrunner</button>
            </div>
            <div className="canicross">
              <img className="img2" alt="img2" src=".\images\running_04.png"></img>
                <h2>Lär dig Canicross</h2>
                <p>Anmäl dig till vår CaniX Coachning online!</p>
                <p>Kursen som hjälper din hund att komma igång med canicross på bästa sätt.</p>
                <p>Läs mer om CaniX Coachning här!</p>
                <button className="btn3">Anmäl dig till CaniX Coachning</button>
                </div>
                </div>
                <div className="training">
                <img className="img4" alt="img4" src=".\images\unsplash_dog.png"></img>
                <div className="training-text">
                <h2>Varför ska din hund löptränas?</h2>
                <p>Hunden får ett större välbefinnande.</p>
                <p>Det är den bästa aktiviteten för en "rastlös" hund.</p>
                <p>Hunden blir fysiskt & psykiskt stimulerad.</p>
                <p>Hunden får en “uppgift” som ökar förmågan för samarbete samt stärker hundens självförtroende .</p>
                <p>För en hållbar och stark hund som ska prestera inom exempelvis jakt, agility/tävling, utställning med mera.</p>
                <p>Ökar möjligheten att lyckas på andra områden inom hundträning, t.ex aggressivitet, stress .</p>
                <p>Sist men inte minst - hunden får en bättre hälsa och håller sig i fysisk form vilket bidrar till ett friskare & roligare liv.</p>
                <a href="./training">Läs mer om löpträningen här!</a>
                </div>

                </div>
        </div>

    )
};
export default HomeExtension;