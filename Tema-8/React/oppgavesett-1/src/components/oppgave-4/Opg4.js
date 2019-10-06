import React from 'react'

function MinLink() {
    return (
        <a href="https://www.vg.no">Dette er en link</a>
    )
}
  
function Opg4 () {
    return (
        <div>
            <h1>Her er en link</h1>
            <p>Rett under her</p>
            <MinLink />
            <p>Her kommer den igjen </p>
            <MinLink />
        </div>
    )
}

export default Opg4