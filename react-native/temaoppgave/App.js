import React from 'react';
import { View } from 'react-native';
import MemoryGame from "./Components/MemoryGame"
import CardTest from "./Components/CardTest"
import Styles from "./Components/Styles"

export default class App extends React.Component {
  render() {
    return (
      <MemoryGame />
    )
  }
}