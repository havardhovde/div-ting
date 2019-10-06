import React from "react"
import { View, Text } from "react-native"
import Opg33 from "./components/Opg33"
import Opg4 from "./components/Opg4"

export default class Opg5 extends React.Component {
    render() {
        return(
            <View>
                <Text style={{textAlign: "center", fontSize: 20}}>Oppgavesett 3, Oppgave 3</Text>
                <Opg33 />
                <Text style={{textAlign: "center", fontSize: 20}}>Oppgavesett 3, Oppgave 4</Text>
                <Opg4 />
            </View>
        )
    }
}