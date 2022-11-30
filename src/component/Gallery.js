import React from "react"
import "../Style/component/Gallery.css"


function Gallery(props) {
    return (
        <div className="gallery">
            <img src={props.cover} alt="props.title"/>  
            <div className="filtreGallery"></div>
            <h2>{props.title}</h2>
        </div> 
    )
}

export default Gallery