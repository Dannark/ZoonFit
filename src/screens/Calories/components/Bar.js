import React from 'react'
import {View, Text} from 'react-native'
import {getTotalKcal, formatNumber} from '../functions'

import s from '../styles'

export default function bar(){
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