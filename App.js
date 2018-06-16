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
import ListItem from "./Components/ListItem";
import FakeDataArray from "./FakeData";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {FakeDataArray.map((value, index) => {
          // Destructing es6 object
          const { avatar, userName } = value;
          ///  avatar={avatar} userName={userName} tương đương {...value}
          return (
            <ListItem key={index} avatar={avatar} userName={userName} />
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    margin: 10
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
