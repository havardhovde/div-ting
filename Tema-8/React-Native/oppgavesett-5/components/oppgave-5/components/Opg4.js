import React, {Component} from 'react'
import { View, Text, TouchableHighlight } from "react-native"
import Styles from './Styles';

export default class Opg4 extends Component {
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
            <View>
                <View style={Styles.buttons}>
                    <TouchableHighlight style={Styles.btn} onPress={this.red}><Text>Rød</Text></TouchableHighlight>
                    <TouchableHighlight style={Styles.btn} onPress={this.green}><Text>Grønn</Text></TouchableHighlight>
                    <TouchableHighlight style={Styles.btn} onPress={this.blue}><Text>Blå</Text></TouchableHighlight>
                </View>
                <View style={{backgroundColor: this.state.color, height:100}}><Text style={Styles.colorText}>Dette er min komponent, den er {this.state.text}</Text></View>
            </View>
        )
    }
}