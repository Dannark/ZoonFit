import React from 'react'
import {View, Text} from 'react-native'
import {BackButton} from '../../../components/Buttons/'

import s from '../styles'

export default function header(props){
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