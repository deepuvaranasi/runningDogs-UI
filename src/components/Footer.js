import "./FooterStyle.css"
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="top">
            <div className="top-left">
            <a href="/About.js">Om Running Dogs</a>
                <a href="/Contact.js">Kontakta oss</a>
                <a href="/TermsOfUse">Användarvilkor</a>
                </div>
            <div className="top-center">
            <p>Prenumerera på vårat nyhetsbrev</p>
                <input type="text" placeholder="Din e-postadress" />
                <button  type="submit">PRENUMERERA</button>
                </div>
        </div>
        <div className="bottom">
        <div className="payment">
                   <a href="/">
                        <i className="fa-brands fa-cc-paypal"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-cc-stripe"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-cc-klarna"></i>
                    </a>
                </div>
                <div className="social">                   
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Footer