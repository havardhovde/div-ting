import React from 'react'
import { Text, TouchableHighlight } from "react-native"
import Styles from "./Styles"

export default class Buttons extends React.Component {
    render() {
        return(
            <TouchableHighlight
                style={[Styles.Button, this.props.highlight ? Styles.ButtonHighlighted : null]} underlayColor="black" onPress={this.props.onPress}>
                <Text style={Styles.ButtonText}>{this.props.value}</Text>
            </TouchableHighlight>
        )
    }
}