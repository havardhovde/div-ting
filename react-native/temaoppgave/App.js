import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MemoryGame from "./components/MemoryGame"

export default class App extends React.Component {
  render() {
    return (
      <View>
        <MemoryGame />
      </View>
    );
  }
}