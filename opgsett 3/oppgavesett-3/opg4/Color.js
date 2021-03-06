import React, {Component} from 'react'
import './App.css';

class Color extends Component {
    state = {
        color: this.props.color
    }


    red=() => {
        this.setState(
            {
                color: "red",
                text: "Rød"
            }
        )
    }

    green=() => {
        this.setState(
            {
                color: "green",
                text: "Grønn"
            }
        )
    }

    blue=() => {
        this.setState(
            {
                color: "blue",
                text: "Blå"
            }
        )
    }

    render() {
        return(
            <div>
                <button onClick={this.red}>Rød</button>
                <button onClick={this.green}>Grønn</button>
                <button onClick={this.blue}>Blå</button>
                <div style={{backgroundColor: this.state.color}}>Dette er min komponent, den er {this.state.text}</div>
            </div>
        )
    }
}

export default Color