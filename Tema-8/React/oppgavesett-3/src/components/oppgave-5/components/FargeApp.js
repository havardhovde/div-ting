import React from 'react'
import './FargeApp.css'

class FargeApp extends React.Component {
    state = {
        red: 128,
        green: 128,
        blue: 128,
        textColor: "black",
    }

    endreFarge = (evt) => {
        this.setState(
            {[evt.target.name]: evt.target.value}
        )
    }

    Reset = () => {
        this.setState(
            {red: 128, green: 128, blue: 128}
        )
    }

    Random = () => {
        this.setState(
            {red: Math.floor(Math.random() * 255), green: Math.floor(Math.random() * 255), blue: Math.floor(Math.random() * 255)}
        )
    }

    // Endrer fargen på teksten dersom bakgrunnen blir for mørk
    textColor = () => {
        if(this.state.red < 128 && this.state.green < 128 && this.state.blue < 128) {
            this.setState(
                {textColor: "white"}
            )
        } else {
            this.setState(
                {textColor: "black"}
            )
        }
    }

    render() {
        return(
            <div className="fargeapp" onChange={this.textColor} style={{color: this.state.textColor, backgroundColor: `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`}}>
                <h1>Velg farge!</h1>

                <input name="red" type="range" min="1" max="255" value={this.state.red} onChange={this.endreFarge} />
                    <p>Rød: {this.state.red}</p>

                <input name="green" type="range" min="1" max="255" value={this.state.green} onChange={this.endreFarge} />
                    <p>Grønn: {this.state.green}</p>

                <input name="blue" type="range" min="1" max="255" value={this.state.blue} onChange={this.endreFarge} />
                    <p>Blå: {this.state.blue}</p>

                <button style={{color: this.state.textColor, border: `2px solid ${this.state.textColor}`, backgroundColor: `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`}} className="button" onClick={this.Random}>Random</button>

                <button style={{color: this.state.textColor, border: `2px solid ${this.state.textColor}`, backgroundColor: `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`}} className="button" onClick={this.Reset}>Reset</button>
            </div>
        )
    }
    componentDidMount () {
        this.interval = setInterval(this.textColor, 10)
    }
}

export default FargeApp