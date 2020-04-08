import React from 'react'
import {View} from 'react-native'
import s from './styles'
import GradientRect from './GradientRect'
import WeekDays from '../Components/WeekDays'
import Config from '../../../Config'

export default props => {

    const heightContainer = props.height? props.height: 150
    const selectedDay =  props.selectedDay? props.selectedDay : 4

    return(
        <>
            <View style={[s.container, {height:heightContainer}]}>
                <GradientRect height={heightContainer} data={props.data2} 
                    lineColor={Config.secondaryColor.color} fillColor={'white'}/>

                <GradientRect height={heightContainer} data={props.data} smooth={.8}
                    lineColor={Config.primaryColor.color} selection={selectedDay} />
                    
            </View>
            <WeekDays daySelected={selectedDay} />
        </>
    )
}