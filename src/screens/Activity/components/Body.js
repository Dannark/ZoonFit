import React from 'react'
import {Text, View, StyleSheet, TouchableHighlight, Button, ScrollView} from 'react-native'
import {BackButton} from '../../../components/Buttons'
import CounterSection from '../../Home/Sections/CounterSection'
import GradientChart from '../../../components/Charts/GradientChart'
import GradientRect from '../../../components/Buttons/Components/GradientRect'
import { useSelector, useDispatch } from 'react-redux'
import {getTotalKcal, formatNumber} from '../functions'

import Config from '../../../Config'
import s from '../styles'


export default props =>{
  //const foodDatabase = useSelector(state => state.foodsReducer.data)
  const foodListOfTheSelectedDay = useSelector(state => 
    state.daysWorkedReducer.daysWorked[state.daysWorkedReducer.selectedDayIndex] != undefined &&
      state.daysWorkedReducer.daysWorked[state.daysWorkedReducer.selectedDayIndex].caloriesFood != undefined?
        state.daysWorkedReducer.daysWorked[state.daysWorkedReducer.selectedDayIndex].caloriesFood : [] );

  const totalKcal = getTotalKcal(foodListOfTheSelectedDay)

  const user = useSelector(state => state.userPrefDataReducer.user);

  // chart
  const chartHeight = 150
  const dayOfWeek = 4

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

        <GradientChart height={chartHeight} data={data} data2={data2} selectedDay={dayOfWeek} />
        <CounterSection />

        <View style={s.statusContainer}>
          <View style={s.statusNameContainer}>
            <Text style={s.textStatusName}>Gasto</Text>
          </View>
          <View style={s.statusDisplay}>
            <GradientRect alpha1="1" alpha2="0" />
            <Text style={s.textStatusPercentage}>{formatNumber(0)} <Text style={s.mini}>kcal</Text></Text>
          </View>
        </View>

        <View style={s.statusContainer}>
          <View style={s.statusNameContainer}>
            <Text style={s.textStatusName}>Ingerido</Text>
          </View>
          <View style={s.statusDisplay}>
            <GradientRect alpha1="1" alpha2="0" color1={Config.secondaryColor.color} 
              color2={Config.secondaryColor.color} />
            <Text style={s.textStatusPercentage}>{formatNumber(totalKcal)} <Text style={s.mini}>kcal</Text></Text>
          </View>
        </View>

      </ScrollView>
    </View>
  )
}