import React from 'react'
import {StyleSheet, View, Text, Image, TouchableHighlight}  from "react-native"

const Styles = StyleSheet.create({
    memory: {
        backgroundColor: "lightblue",
        marginTop: 24,
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },
    img: {
        width: 75,
        height: 75,
        margin: 10,
        borderWidth: 6,
        borderRadius: 10,
        borderColor: "blackx",
    }
});

export default class MemoryGame extends React.Component {
    render() {
        let img1 = [
            {src: require("../img/blueSquare.png"), name: "blueSquare"},
            {src: require("../img/redSquare.png"), name: "redSquare"},
            {src: require("../img/greenSquare.png"), name: "greenSquare"},
            {src: require("../img/yellowSquare.png"), name: "yellowSquare"},
            {src: require("../img/purpleSquare.png"), name: "purpleSquare"},
            {src: require("../img/orangeSquare.png"), name: "orangeSquare"},
        ];
    
        img1 = img1.concat(img1);

        function shuffle(array){
            for(let i = array.length -1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]
            }
        }
    
        shuffle(img1)

        let boxes = [];

        for(let i = 0; i <= 11; i++) {
            boxes.push(
                <Image key={"box_" + i} style={Styles.img} source= {img1[i].src} />
            )
        }

        return (
            <View style={Styles.memory}>
                {boxes}
            </View>  
        );
    }
}