import React from 'react';
import { Easing, Image, Text, TouchableHighlight, View } from 'react-native';
import FlipView from 'react-native-flip-view';
import Styles from './Styles';

export default class CardTest3 extends React.Component {
  flip = () => {
    if (this.props.card.flipped) { return; }
    this.props.onFlip(this.props.card);
  }

  renderFront = () => (
    <TouchableHighlight onPress={this.flip}>
      <View style={Styles.btn}>
        <Image
          style={Styles.img}
          source={require("../img/questionmark.png")}
        />
      </View>
    </TouchableHighlight>
  );

  renderBack = () => (
    <TouchableHighlight onPress={this.flip}>
      <View style={Styles.btn}>
        <Image
          style={Styles.img}
          source={img1[0].src}
        />
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <FlipView
        front={this.renderFront()}
        back={this.renderBack()}
        isFlipped={false}
        flipAxis="y"
        flipEasing={Easing.out(Easing.ease)}
        flipDuration={500}
        perspective={1000}
        style={Styles.memory}
      />
    );
  }
}