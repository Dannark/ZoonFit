import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Config from '../../Config'

export default class ButtonPlus extends Component {
  clickHandler = () => {
    this.props.onPress()
  };

  render() {
    return (
      <View style={s.MainContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={this.clickHandler}
          style={s.TouchableOpacityStyle}>
            <AntDesign name="pluscircle" size={50} color="white"//{Config.primaryColor.color} 
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const s = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    elevation: 8,
  },

  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },
});