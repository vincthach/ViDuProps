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
  Image, // Giúp hiển thị hình ảnh trong react native,
  TextInput
} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    // Khai báo state 
    this.state = {
      a: "0",
      b: "0",
      c: "0"
    }
  }

  _tinhToan = (params) => {
    // Destructing objet es6 
    const { a, b } = params;
    // ES6 string format: `${a}${b}`
    const c = `${parseInt(a) + parseInt(b)}`;
    this.setState({ a: a, b: b, c: c });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => {
            this._tinhToan({ ...this.state, a: text });
          }}
          value={this.state.a}
        />
        <Text> + </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this._tinhToan({ ...this.state, b: text })}
          value={this.state.b}
        />
        <Text> = </Text>
        <TextInput
          style={styles.textInput}
          value={this.state.c}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    margin: 20,
    flexDirection: "row",
    alignItems: "center"
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
  textInput: { height: 40, flex: 1, borderColor: 'red', borderWidth: 1, textAlign: "center" }
});
