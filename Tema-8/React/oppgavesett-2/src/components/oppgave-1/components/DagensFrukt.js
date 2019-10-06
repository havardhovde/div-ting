import React from "react"

function DagensFrukt() {
    let date = new Date()
    let day = date.getDay()
    
    const frukter = [
        "Eple",
        "Pære",
        "Banan",
        "Mango",
        "Kiwi",
        "Fersken",
        "Aprikos",
    ]
    
    const frukt = frukter[day]
    
    const first = frukter.pop()
    frukter.unshift(first)
    
    return (
        <div>
            <p>I dag bør du spise {frukt}</p>
        </div>
    )
}

export default DagensFrukt