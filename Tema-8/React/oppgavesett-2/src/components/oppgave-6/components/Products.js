import React from "react"

function Products(props) {
    return (
        <div>
            <img src={props.bilde} alt={props.navn}/>
            <h3>{props.navn}</h3>
            <h2>{props.pris}</h2>
            <button type="button">Legg til i handlekurven</button> 
        </div>  
    )
}

export default Products