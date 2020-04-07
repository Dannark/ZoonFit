import React from 'react'
import {View, ScrollView} from 'react-native'
import Buttons from '../../Buttons'
import s from './styles'

export default porps =>{
    return(
        <View style={s.dates}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Buttons dia={"12"} mes={"Fev"} buttonType={"past"}></Buttons>
                <Buttons dia={"13"} mes={"Fev"} buttonType={"past"}></Buttons>
                <Buttons dia={"Hoje"} mes={"Fev"} buttonType={"today"}></Buttons>
                <Buttons dia={"15"} mes={"Fev"} buttonType={""}></Buttons>
                <Buttons dia={"16"} mes={"Fev"} buttonType={""}></Buttons>
                <Buttons dia={"17"} mes={"Fev"} buttonType={""}></Buttons>
                <Buttons dia={"18"} mes={"Fev"} buttonType={""}></Buttons>
                <Buttons dia={"19"} mes={"Fev"} buttonType={""}></Buttons>
                <Buttons dia={"20"} mes={"Fev"} buttonType={""}></Buttons>
            </ScrollView>
        </View>
    )
}