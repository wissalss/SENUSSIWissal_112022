import React from "react";
import "../Style/Home.css"
import AllLogement from '../data/logements.json';
import accueil from "../assets/banniere_accueil.png"
import { Link } from "react-router-dom"
import Gallery from "../component/Gallery"


function Home() {
    return ( 
    <div className = "Home" >
        <div className="banniere">
                <img src={accueil} alt="" />
                <h1>Chez vous, partout et ailleurs</h1>
                <div className="filtre-photo"></div>
        </div>
        <div className="GalleryLogements">
                {AllLogement.map((logement) => (
                    <Link to={`/Logement/${logement.id}`} key={logement.id}>
                    <Gallery
                        cover={logement.cover}
                        title={logement.title}
                        id={logement.id}
                    />
                    </Link>
                ))}
            </div>
    </div>
       )   
    }

export default Home