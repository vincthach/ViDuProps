
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image // Giúp hiển thị hình ảnh trong react native
} from 'react-native';
import Images from "../Images";

class ListItem extends Component {
  render() {
    // ES6 Note: Destructing object
    const { avatar, userName } = this.props;
    return (
      <View style={{ flexDirection: "row", backgroundColor: "black" }}>
        <Image source={{ uri: avatar }} style={{ width: 193, height: 110 }} />
        <View style={{ flex: 1 }} />
        <Text style={{ color: "white", margin: 10 }}>{userName}</Text>
      </View>
    );
  }
}

export default ListItem
