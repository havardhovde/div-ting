//Oppgave 3 fra oppgavesett 3

import React from 'react';
import { View, Text, TouchableHighlight, Image, Dimensions} from "react-native"
import Styles from "./Styles"

export default class Opg33 extends React.Component {
    state = {
      film: this.props.film,
      director: this.props.director,
      runtime: this.props.runtime,
      premiere: this.props.premiere
    }
  
    taxidriver =() => {
      this.setState(
        {
          film: "Taxi Driver",
          director: "Martin Scorsese",
          runtime: "1t 54min",
          premiere: "26/12/1976",
          poster: "https://i.pinimg.com/originals/ab/95/a9/ab95a910a1f223865930dc71c4b49680.png",
        }
      )
    }
  
    pulpfiction =() => {
      this.setState(
        {
          film: "Pulp Fiction",
          director: "Quentin Tarantino",
          runtime: "2t 58min",
          premiere: "21/10/1994",
          poster: "https://static.posters.cz/image/750/plakater/pulp-fiction-cover-i1288.jpg",
        }
      )
    }
  
    drive =() => {
      this.setState(
        {
          film: "Drive",
          director: "Nicolas Winding Refn",
          runtime: "1t 35min",
          premiere: "13/08/2011",
          poster: "https://i.pinimg.com/originals/33/72/6e/33726e086fd631da13160fa503381b81.jpg",
        }
      )
    }
  
    render() {
      const { poster, director, runtime, premiere, film } = this.state;
      return(
        <View>
          <View style={Styles.buttons}>
            <TouchableHighlight style={Styles.btn} onPress={this.taxidriver}><Text>Taxi Driver</Text></TouchableHighlight>
            <TouchableHighlight style={Styles.btn} onPress={this.pulpfiction}><Text>Pulp fiction</Text></TouchableHighlight>
            <TouchableHighlight style={Styles.btn} onPress={this.drive}><Text>Drive</Text></TouchableHighlight>
          </View>
          <Text style={Styles.title}>{film}</Text>
          <Image source={{uri: poster}} style={{width: Dimensions.get("window").width, height: Dimensions.get("window").height}} />
          <Text style={Styles.body}>Regissør: {director}</Text>
          <Text style={Styles.body}>Spilletid: {runtime}</Text>
          <Text style={Styles.body}>Premiere: {premiere}</Text>
        </View>
      )
    }
  }
