import React from 'react'
import {View, Text, StyleSheet, ScrollView} from "react-native"

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        justifyContent: 'center',
        alignItems: "center",
    },
    text: {
        flex: 1,
        justifyContent: "center",
        textAlign: "center",
    }
})

class Opg4 extends React.Component{
    render(){
        return(
            <ScrollView contentContainerStyle={Styles.container}>
                <Text style={Styles.text}>
                test
                </Text>
            </ScrollView>
        )
    }
}

export default Opg4