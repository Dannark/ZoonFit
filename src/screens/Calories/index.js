import React from 'react'
import {View, Text, ScrollView} from 'react-native'
import ButtonList from '../../components/Buttons/Components/ButtonList'
import {BackButton} from '../../components/Buttons/'

import {getData, getTotalKcal, formatNumber} from './functions'
import s from './styles'

export default props => {

    return(
        <View style={s.page}>

            {header(props)}
            {bar()}
            {body(props)}
            
        </View>
    )
}

function onclick(){
    
}

function header(props){
    return(
        <View style={s.header}>
            <BackButton navigation={props.navigation}></BackButton>
            <View>
                <Text style={s.small_title}>Calorias</Text>
                <Text style={s.sub_title}>Sua ingestão de calorias</Text>
            </View>
            
        </View>
    )
}

function bar(){
    const current = getTotalKcal()
    const total = 2057
    const progress = (current / total) * 100
    return(
        <View style={s.progressContainer}>
            <View style={s.calTextContainer}>
                <Text style={s.calTextCurrent}>{formatNumber(current)}</Text>
                <Text style={s.calTextMax}>/ {formatNumber(total)} kcal</Text>
            </View>
            <View style={s.barContainer}>
                <View style={[s.bar, {width: `${progress}%`}]} />
            </View>
        </View>
    )
}

function body(props){
    
    const data = getData()
    
    return(
        <ScrollView>
            {
                data.map((obj, i) => {
                    return (
                        <ButtonList key={i} 
                            onPress={onclick()} name={obj.name} time={obj.time} foods={obj.foods} />
                    )
                })
            }
        </ScrollView>
    )
}
