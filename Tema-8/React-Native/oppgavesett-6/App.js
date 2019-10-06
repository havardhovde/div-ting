// Link til Snack: https://snack.expo.io/@havardhovde/56b37d

import React from 'react';
import { StyleSheet, View } from 'react-native';
import Opg1 from "./components/Opg1"

export default class App extends React.Component{
  render() {
    return (
      <View style ={styles.container}>
        <Opg1 />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})