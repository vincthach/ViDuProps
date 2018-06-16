/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image // Giúp hiển thị hình ảnh trong react native
} from 'react-native';
import Images from "./Images";

class Bananas extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.thach}</Text>
        <Image source={this.props.pic} style={{ width: 193, height: 110 }} />
      </View>
    );
  }
}


export default class App extends Component {
  render() {
    let imageData = Images.banana;
    return (
      <View style={styles.container}>
        <Bananas pic={imageData} thach="dep trai" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
