import React from 'react'
import {View} from 'react-native'

import Header from './components/Header'
import Bar from './components/Bar'
import Body from './components/Body'
import ButtonPlus from '../../components/Buttons/ButtonPlus'

import s from './styles'

export default props => {

    return(
        <View style={s.page}>

            {Header(props)}
            {Bar()}
            {Body(props)}
            <ButtonPlus onPress={() => nextPage(props)} />

        </View>
    )
}

function nextPage(props){
    props.navigation.navigate("Comida")
}