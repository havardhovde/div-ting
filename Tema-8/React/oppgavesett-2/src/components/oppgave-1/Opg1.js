import React from "react"
import DagensFrukt from "./components/DagensFrukt"
import DagensFilmtips from "./components/DagensFilmtips"
import "./Opg1.css"

function Opg1() {
    return(
        <div>
            <h1>Frukt- og Filmtips</h1>
            <DagensFrukt />
            <DagensFilmtips />
        </div>
    )
}

export default Opg1