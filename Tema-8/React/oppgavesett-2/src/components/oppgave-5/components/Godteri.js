import React from "react"

function Godteri(props) {
    return (
        <div>
            <h3>{props.navn}</h3>
            <img src={props.bilde} alt={props.alt}/>
        </div>  
    )
}

export default Godteri