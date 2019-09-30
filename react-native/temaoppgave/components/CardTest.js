import React from 'react'
import {View, Image, TouchableHighlight}  from "react-native"
import Styles from "./Styles"
import img1 from "./img1"

export default class CardTest extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            image: require("../img/questionmark.png"),
            clicks: 0,
            flipped: false,
        };
        this.changeImage = this.changeImage.bind(this);
    }

    changeImage = () => {
        this.setState({
            image: img1[0].src,
            flipped: true,
        })
    }

    render() {
        increaseClicks = () => {
            this.setState({
                clicks: this.state.clicks + 1
            })
        }

        return(
            <View>
                <TouchableHighlight onPress={() => {this.changeImage(); splice()}} style={Styles.btn}>
                    <Image style={Styles.img} source={this.state.image} />  
                </TouchableHighlight>
            </View>
        )
    }
    
}