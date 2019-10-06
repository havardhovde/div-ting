//Kan også sees på https://snack.expo.io/@havardhovde/oppgavesett-5

import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Opg1og2og3 from "./components/Opg1og2og3"
import Opg4 from "./components/Opg4"
import Opg5 from "./components/oppgave-5/Opg5"

const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  }
})

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={{flex: 1}}>
          <View contentContainerStyle={Styles.container}>
            <Opg1og2og3 />
            <Opg4 />
            <Opg5 />
          </View>
        </ScrollView>
    );
  }
}