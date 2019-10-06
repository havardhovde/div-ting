import React from "react"

function Brikke(props) {
    return (
        <div>
            <div className = "letter"><h1>{props.letter}</h1></div>
            <div className = "points"><p>{props.points}</p></div>
        </div>
    )
    
}

export default Brikke