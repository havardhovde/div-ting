import React from "react"

function DagensFilmtips() {
    let date = new Date()
    let day = date.getDay()
    
    const filmer = [
        "Sharknado 1",
        "Sharknado 2",
        "Sharknado 3",
        "Sharknado 4",
        "Sharknado 5",
        "Sharknado 6",
        "Sharknado 7",
    ]
    
    const first = filmer.pop()
    filmer.unshift(first)
    
    const film = filmer[day]
    
    return (
        <div>
            <p>I dag bør du se {film}</p>
        </div>
    )
}

export default DagensFilmtips