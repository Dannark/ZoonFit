import React from 'react'
import {Text, View, StyleSheet, TouchableHighlight, Button, ScrollView} from 'react-native'
import {BackButton, HorizontalButton} from '../../components/Buttons'
import CounterSection from '../../components/Sections/CounterSection'
import GradientChart from '../../components/Charts/GradientChart'
import s from './styles'

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
        
        <HorizontalButton id={1} text={"Botao1"} subtext={"08:00"} />
        <HorizontalButton id={2} text={"Botao2"} subtext={"09:00"} />
      </ScrollView>
    </View>
  )
}