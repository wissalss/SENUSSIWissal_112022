import React from "react"
import {NavLink} from 'react-router-dom';
import '../Style/component/Header.css';
import logo from "../assets/Logo_Header.png"

function Header() {
    return ( 
        <div className="Header">   
            <header>
                <img src={logo} alt="logo Kasa" />
                <nav>
                    <NavLink to="/" className={(Home) => Home.isActive ? "active" : "" }>
                        Accueil</NavLink>
                    <NavLink to="/Apropos" className={(Apropos) => Apropos.isActive ? "active" : ""}>
                        À Propos</NavLink>
                </nav>
            </header>
        </div>
    )
}

export default Header;