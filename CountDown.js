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

export default class CountDown extends Component {

  constructor(props) {
    super(props);

    const { date } = props;
    var startDate = new Date();
    // Do your operations
    var endDate = new Date(date);
    var seconds = (endDate.getTime() - startDate.getTime()) / 1000;
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: seconds
    }
  }

  componentDidMount() {
    // setInterval()
  }



  render() {
    return (

      <View style={{ flex: 1, flexDirection: 'row', backgroundColor: "red", justifyContent: "space-between" }}>
        <Text>{this.state.seconds}</Text>
      </View>

    );
  }
}
