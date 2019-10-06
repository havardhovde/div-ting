import React from "react"
import { Text, View, StyleSheet } from "react-native"

export default class Opg1 extends React.Component {
    state = {
      joke: {},
    }

    async getJokes() {
      const url = "https://sv443.net/jokeapi/category/Miscellaneous"
      const response = await fetch(url)
      const data = await response.json()
      return (data)
    }

    render() {
        return(
          <View>
            <View style={styles.container}>
                <Text style={styles.heading}>Jokes (Oppgave 1)</Text>
                  <Text style = {styles.list}>{this.state.joke.joke}</Text>
                  <Text style = {styles.list}>{this.state.joke.setup}</Text>
                  <Text style = {styles.list}>{this.state.joke.delivery}</Text>
            </View>
                <Text style={styles.button}>Oppdater for en ny vits!</Text>
          </View> 
        )
    }
    
      componentDidMount() {
        this.getJokes()
          .then(data => this.setState({joke: data}))
      }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: "center",
      textAlign: "center"
    },

    heading: {
      fontSize: 20,
      paddingTop: 30,
      paddingBottom: 20,
      backgroundColor: "maroon",
      textAlign: "center",
      color: "white",
      width: 1000,
    },

    list: {
        padding: 10,
        textAlign: "center",
    },
    
    button: {
      justifyContent: "center",
      backgroundColor: "maroon",
      padding: 30,
      borderRadius: 15,
      marginTop: 250,
      marginLeft: 80,
      alignItems: "center",
      width: 200,
      color: "white",
      textAlign: "center"
      },
  }); 