import React from "react"
import Godteri from "./components/Godteri"
import godteriListe from "./data/godteriListe"
import "./Opg5.css"

function Opg5() {
    
    const mittGodteri = godteriListe.map(godteri => <Godteri key={godteri.id} navn={godteri.navn} bilde={godteri.bilde}/>)
    
    return (
        <div className = "godteri">
            {mittGodteri}
        </div>
    )
}

export default Opg5