import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Opg1og2og3 from "./components/Opg1og2og3"
import Opg4 from "./components/Opg4"

const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={Styles.container}>
          <Opg1og2og3 />
          <Opg4 />
        </ScrollView>
        </View>
    );
  }
}