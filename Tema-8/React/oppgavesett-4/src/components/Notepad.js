import React from 'react'
import "./styles.css"

export default class Notepad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        }

        // this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({value: this.element.value})
    }

    render() {
        return(
            <div className="notepadMain">
                <h1>Notisblokk</h1>
                <form onSubmit={this.handleSubmit}>
                    <textarea type="text" rows="10" cols="40" ref={el => this.element = el}></textarea>
                    <input type="submit" value="Lagre" />
                </form>
                    <div className="savedNote">
                        <h1 className="NotesH1">Lagret notat:</h1>
                        <div>{this.state.value}</div>
                    </div>
            </div>
        )
    }
}