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
import CountDown from "./CountDown";
export default class App extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', backgroundColor: "red", justifyContent: "space-between" }}>
        <CountDown date={"Sep 17 2018 16:07:50"} />
      </View>

    );
  }
}
