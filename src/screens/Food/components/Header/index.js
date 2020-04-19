import React from 'react'
import {View, Text} from 'react-native'
import {BackButton} from '../../../../components/Buttons'

import s from './styles'

export default function header(props){
    return(
        <View style={s.header}>
            <BackButton navigation={props.navigation} target="Calorias"></BackButton>
            <View>
                <Text style={s.small_title}>{props.title}</Text>
                <Text style={s.sub_title}>{props.subtitle}</Text>
            </View>
            
        </View>
    )
}