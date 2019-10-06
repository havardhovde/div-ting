import React from 'react'
import {View} from "react-native"

class Opg4 extends React.Component{
    render(){
        return(
            <View style={{
                    flexDirection: 'row',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
            }}>
                <View>
                    <View style={{width: 125, height: 125, backgroundColor: 'red'}} />
                    <View style={{width: 125, height: 125, backgroundColor: 'white'}} />
                    <View style={{width: 125, height: 125, backgroundColor: 'red'}} />
                </View>
                <View>
                    <View style={{width: 125, height: 125, backgroundColor: 'white'}} />
                    <View style={{width: 125, height: 125, backgroundColor: 'white'}} />
                    <View style={{width: 125, height: 125, backgroundColor: 'white'}} />
                </View>
                <View>
                    <View style={{width: 125, height: 125, backgroundColor: 'red'}} />
                    <View style={{width: 125, height: 125, backgroundColor: 'white'}} />
                    <View style={{width: 125, height: 125, backgroundColor: 'red'}} />
                </View>
            </View>
        )
    }
}

export default Opg4