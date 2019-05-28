import React from 'react'
import {StyleSheet} from "react-native"

const Styles = StyleSheet.create({
    memory: {
        marginTop: 24,
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },
    btn: {
        width: 75,
        height: 75,
        margin: 10,
        borderWidth: 5,
        borderRadius: 10,
        borderColor: "black",
    },
    img: {
        width: 65,
        height: 65,
    } 
});

export default Styles