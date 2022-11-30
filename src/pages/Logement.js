import React from "react"
import "../Style/Logement.css"
import AllLogement from '../data/logements.json'
import { useParams } from "react-router-dom"
import Dropdown from "../component/Dropdown"
import Tag from "../component/Tag"
import Carroussel from "../component/Carroussel"
import Page404 from "./Page404"


function Logement() {
    
    const {logementId} = useParams()
    const Logement = AllLogement.find((item) => item.id == logementId)
    console.log(Logement)

    function LogementRating() {
        const classes = [null,"une","deux","trois","quatre","cinq",]
            return "etoiles " + classes[parseInt(Logement.rating)]
    }
    return Logement === undefined ? (
        <Page404 />
        ) : (
            <div className="Logement">
                <div className="navig">
                    <Carroussel 
                    pictures={Logement.pictures}/>
                    </div>
                <div className="titre-nom">
                    <div className="titre">
                        <h2>{Logement.title}</h2>
                        <p>{Logement.location}</p>
                    </div>
                    <div className="nom">
                        <h3>{Logement.host.name}</h3>
                        <img src={Logement.host.picture} alt={Logement.host.picture} />
                    </div>
                </div>
                <div className="tag-eval">
                    <div className="tags">
                        {Logement.tags.map((tag) => (
                        <Tag tagsNom={tag} key={tag}/>
                        ))}
                    </div>
                    <div className={LogementRating()}></div>
                </div>
                <div className="descript-equip">
                    <div className="description">
                        <Dropdown title="Description" text={Logement.description}/>  
                    </div>
                    <div className="equipements">
                        <Dropdown title="Équipements" text={Logement.equipments}/>             
                    </div>
                </div>
            </div>
        )
}

export default Logement