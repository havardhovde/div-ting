import React from 'react'
import "./styles.css"

export default class Infobox extends React.Component {
    render() {
        return(
            <div className="infobox">
                <h2>Info</h2>
                <p>Dette er min side til oppgavesett 4. Den er skrevet i React.js. Interaksjonene med brukeren er en notisblokk samt en side hvor man kan lese om forskjellige temaer. Artiklene er hentet fra wikipedia.</p>
            </div>
        )
    }
}