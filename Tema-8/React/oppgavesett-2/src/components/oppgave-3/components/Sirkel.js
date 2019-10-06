import React from "react"

function Sirkel(props) {
    return (
        <div>
            <svg width="50" height="50">
                <circle cx="25" cy="25" r="20" fill={props.color}/>
            </svg>
        </div>
    )
}

export default Sirkel