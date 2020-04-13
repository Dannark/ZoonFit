import React from 'react'
import {Text, View, StyleSheet, TouchableHighlight, Button, ScrollView} from 'react-native'
import {BackButton} from '../../components/Buttons'
import CounterSection from '../Home/Sections/CounterSection'
import GradientChart from '../../components/Charts/GradientChart'
import GradientRect from '../../components/Buttons/Components/GradientRect'
import s from './styles'
import Config from '../../Config'

export default props =>{
  const chartHeight = 150
  const selectedDay = 4

  const data = [30, 10, 50, 70, 20, 70, 90, 30, 40]
  const data2 = Array(7).fill(0).map((_, i) => parseInt(Math.random() * chartHeight, 10))
  
  return(
    <View style={s.page}>
      <ScrollView >
        <View style={s.header}>
          <BackButton navigation={props.navigation}></BackButton>
          <View>
            <Text style={s.small_title}>Your Activity</Text>
            <Text style={s.sub_title}>You are very Active!</Text>
          </View>
        </View>

        <GradientChart height={chartHeight} data={data} data2={data2} selectedDay={selectedDay} />
        <CounterSection />

        <View style={s.statusContainer}>
          <View style={s.statusNameContainer}>
            <Text style={s.textStatusName}>Sáude</Text>
          </View>
          <View style={s.statusDisplay}>
            <GradientRect alpha1="1" alpha2="0" />
            <Text style={s.textStatusPercentage}>71%</Text>
          </View>
        </View>

        <View style={s.statusContainer}>
          <View style={s.statusNameContainer}>
            <Text style={s.textStatusName}>Calorias</Text>
          </View>
          <View style={s.statusDisplay}>
            <GradientRect alpha1="1" alpha2="0" color1={Config.secondaryColor.color} 
              color2={Config.secondaryColor.color} />
            <Text style={s.textStatusPercentage}>9.733</Text>
          </View>
        </View>

        <View style={s.statusContainer}>
          <View style={s.statusNameContainer}>
            <Text style={s.textStatusName}>Peso</Text>
          </View>
          <View style={s.statusDisplay}>
            <GradientRect alpha1="1" alpha2="0" color1={Config.secondaryColor.color}
              color2={Config.secondaryColor.color} />
            <Text style={s.textStatusPercentage}>0.6k</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}