import React from "react"
import "../Style/component/Tag.css"


function Tag (props) {
    return (
        <p className="tag">{props.tagsNom}</p>
    )
}

export default Tag