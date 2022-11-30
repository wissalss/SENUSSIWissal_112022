import React from "react"
import logoFooter from "../assets/Logo_Footer.png"
import "../Style/component/Footer.css"



function Footer () {
    return (
        <footer>
            <img src={logoFooter} alt="logo Kasa footer" />
            <p> © 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer