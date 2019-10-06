import React from 'react'
import {View, Text, StyleSheet, TouchableHighlight, ScrollView} from "react-native"

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        paddingTop: 24,
        padding: 8,
        backgroundColor: "black",
    },

    text: {
        fontSize: 40,
        justifyContent: "center",
        color: "white",
        textAlign: "center",
    },

    button: {
        backgroundColor: "#841584",
        padding: 15,
        marginTop: 15,
        borderRadius: 15,
    },
    
    buttonText: {
        color: "white",
        fontSize: 20,
    }
})

let i = 2

class Opg1og2og3 extends React.Component{
    state = {
        sharknado: "Sharknado",
        number: 1,
    } 

    tellOpp = () => {
        if(i <= 6){
            this.setState(
                ps => {
                    return {number: ps.number + 1}
                },
            )
        }else if(i >= 6){
            this.setState({
                sharknado: "",
                number: `Sharknado ${i} er ennå ikke laget, men bare vent!`,
            })
        }
        i++
    }
    
    reset = () => {
        this.setState({
            sharknado: "Sharknado",
            number: 1,
        })
        i = 2
    }

    render() {
        return(
            <ScrollView contentContainerStyle={Styles.container}>
                <Text style={Styles.text}>{this.state.sharknado}</Text>
                <Text style={Styles.text}>{this.state.number}</Text>
                <TouchableHighlight
                    onPress={this.tellOpp}
                    style={Styles.button}
                ><Text style={Styles.buttonText}>Gå til neste!</Text></TouchableHighlight>
                <TouchableHighlight
                    style={Styles.button}
                    onPress={this.reset}
                ><Text style={Styles.buttonText}>Reset!</Text></TouchableHighlight>
            </ScrollView>
        )
    }
}

export default Opg1og2og3