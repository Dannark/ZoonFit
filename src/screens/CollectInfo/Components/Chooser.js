import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import Config from '../../../Config'
import Feather from 'react-native-vector-icons/Feather';
import {Picker} from '@react-native-community/picker';


export default function App(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View style={s.container}>
      <Text style={s.title}>{props.title}</Text>
      <Picker
        selectedValue={props.options[selectedIndex]}
        style={s.item}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedIndex(itemIndex)
        }>
        {
          props.options.map((item, index) => {
            return <Picker.Item key={index} label={item} value={item} />
          })
        }
      </Picker>

      <TouchableHighlight onPress={() => props.callback(selectedIndex)} style={s.nextButton}>
          <Feather name="chevron-right" size={30} color="white"  />
      </TouchableHighlight>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: Config.bacgroundPrimaryColor.color,
  },
  title:{
    color: 'white',
    fontSize: 30,
    margin: 20,
    textAlign: 'center'
  },
  item:{
    width: 200, 
    height: 50,
    color:'white',
  },


  nextButton:{
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 60,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 20,
    bottom: 30
  }
});
