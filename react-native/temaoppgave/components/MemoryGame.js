import React from 'react';
import { View, Text, Alert } from 'react-native';
// import CardTest from "./CardTest"
// import CardTest2 from "./CardTest2"
import CardTest3 from  "./CardTest3"
import Styles from "./Styles"

export default class MemoryGame extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            score: 0,
        }
    }
    render() {
        let CT = []
            
        for(let i = 0; i <= 11; i++) {
            CT.push (<CardTest3 key={"card_" + i} />)
        }
        return (
            <View style={Styles.memory}>
                {CT}
            </View>
            );
        }
}