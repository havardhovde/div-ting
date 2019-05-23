import React from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity}  from "react-native"

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

export default class MemoryGame extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            image: require("../img/questionmark.png"),
        };
        this.changeImage = this.changeImage.bind(this);
    }

    shuffle = (array) =>{
        for(let i = array.length -1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]
        }
    }

    changeImage = () => {
        // this.setState({
        //     image: require("../img/redSquare.png")
        // })
        console.log("test")
    }

    
    img1 = [
        {src: require("../img/blueSquare.png"), name: "blueSquare", id: 0},
        {src: require("../img/redSquare.png"), name: "redSquare", id: 1},
        {src: require("../img/greenSquare.png"), name: "greenSquare", id: 2},
        {src: require("../img/yellowSquare.png"), name: "yellowSquare", id: 3},
        {src: require("../img/purpleSquare.png"), name: "purpleSquare", id: 4},
        {src: require("../img/orangeSquare.png"), name: "orangeSquare", id: 5},
    ];

    // img1 = img1.concat(img1)

    img2 = this.img1.map(box => ({src: box.src, name: box.name, id: box.id + "x"}))

    img3 = [...this.img1,...this.img2]

    render() {

        // let img1 = [
        //     {src: require("../img/blueSquare.png"), name: "blueSquare", id: 0},
        //     {src: require("../img/redSquare.png"), name: "redSquare", id: 1},
        //     {src: require("../img/greenSquare.png"), name: "greenSquare", id: 2},
        //     {src: require("../img/yellowSquare.png"), name: "yellowSquare", id: 3},
        //     {src: require("../img/purpleSquare.png"), name: "purpleSquare", id: 4},
        //     {src: require("../img/orangeSquare.png"), name: "orangeSquare", id: 5},
        // ];
    
        // // img1 = img1.concat(img1)

        // let img2 = img1.map(box => ({src: box.src, name: box.name, id: box.id + "x"}))

        // let img3 = [...img1,...img2]

        this.shuffle(this.img3)

        let boxTest = this.img3.map(imageBox => 
            <TouchableOpacity key={imageBox.id} onPress={this.changeImage} style={Styles.btn}>
                <Image style={Styles.img} source={this.state.image} />
            </TouchableOpacity>
        );

        console.log(boxTest.name)

        // for(let i = 0; i <= 11; i++) {
        //     boxes.push(
        //         <TouchableHighlight onPress={console.log("test")} key={"box_" + i} style={Styles.btn}>
        //             <Image style={Styles.img} source={this.state.image} />
        //         </TouchableHighlight>
        //     )
        // }

        return (
            <View style={Styles.memory}>
                {boxTest}
            </View>  
        );
    }
}