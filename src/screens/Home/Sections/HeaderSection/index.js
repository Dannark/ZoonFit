import React from 'react'
import {View, Text} from 'react-native'
import {MenuButton} from '../../../../components/Buttons'
import s from './styles'

export default props =>{
  return(
    <>
      <View style={s.headerContainer}>
        <MenuButton navigation={props.navigation} />
        <View style={s.header}>
          <Text style={s.big_title}>26</Text>
          <View>
            <View style={s.bar_background}><View style={[s.bar_progress, {width: '65%'}]} /></View>
            <Text style={s.sub_title}>of 40 Days, you are active!</Text>
          </View>
        </View>
      </View>
    </>
  )
}