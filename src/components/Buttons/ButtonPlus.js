import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux'
import moment from 'moment'

export default props => {
  
  const selectedDay = useSelector(state => 
    state.daysWorked[state.selectedDayIndex] != undefined ?
            state.daysWorked[state.selectedDayIndex] : [] )

  const isTodaySelected = (
    `${selectedDay.day}${selectedDay.month}${selectedDay.year}` == (moment().format("DDMMMYYYY"))
  )

  return (
    <View style={s.MainContainer}>
      {isTodaySelected ?
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={props.onPress}
          style={s.TouchableOpacityStyle}>
            <AntDesign name="pluscircle" size={50} color="white"//{Config.primaryColor.color} 
          />
        </TouchableOpacity>
        : null
      }
    </View>
  )
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