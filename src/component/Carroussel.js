import { useState } from "react"
import "../Style/component/Carroussel.css"
import suivant from "../assets/suivant.png"
import precedent from "../assets/precedent.png"


function Carroussel({ pictures }) {
    const [index, setNewImg] = useState(0)   //useState, représente la valeur de base, 0
                                        //setNewImg, est la fonction que l'on appelle et qui modifie cette valeur
    
    function btnsuivant() {
        var i = index;
        i++                     
        if (i >= pictures.length) i = 0
        setNewImg(i)
    }
    function btnprecedent() {
        var i = index;
        i--
        if (i < 0) i = pictures.length - 1
        setNewImg(i)
    }

    function navigation() {
        return (
            <div className="navigation">
                <img src={precedent} className="precedent" onClick={btnprecedent} alt=""/>
                
                <img src={suivant} className="suivant" onClick={btnsuivant} alt=""/>
                <p>{index + 1}/{pictures.length}</p>
            </div>
        )
    }
    return (
        <div className="photo" style={{backgroundImage: `url("${pictures[index]}")`,}}>
        {pictures.length > 1 ? navigation() : ""}
        </div>
    )
}

export default Carroussel



