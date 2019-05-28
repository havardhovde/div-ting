import React from 'react'
import FlipComponent from "react-native-flip-component"
import {View, Image, TouchableHighlight}  from "react-native"
import Styles from "./Styles"
import img1 from "./img1"

function FrontView(props) {
    return (
        <View>
            <TouchableHighlight onPress={props.flip}>
                <Image style={Styles.img} source={require("../img/questionmark.png")} />
            </TouchableHighlight>
        </View>
    );
}

function BackView(props) {
    return (
        <View>
            <TouchableHighlight onPress={props.flip()}>
                <Image style={Styles.img} source={img1[0].src} />  
            </TouchableHighlight>
        </View>
    );
}

export default class CardTest2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isFlipped: false,
        };
        this.flip = this.flip.bind(this)
    }

    flip() {
        this.setState({
          isFlipped: !this.state.isFlipped,
        });
    }

    render() {
        return (
            <View style={Styles.memory}>
                <FlipComponent 
                    isFlipped={this.state.isFlipped}
                    frontView={
                    <FrontView flip={this.flip} />
                    }
                    backView={
                    <BackView flip={this.flip} />
                    }
                    frontStyles={Styles.btn}
                    backStyles={Styles.btn}
                    rotateDuration={500}
                />
            </View>
        );
    }
}