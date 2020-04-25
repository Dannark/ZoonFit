import React from 'react'
import {View} from 'react-native'
import { Provider } from 'react-redux'

import Header from './components/Header'
import Bar from './components/Bar'
import Body from './components/Body'
import ButtonPlus from '../../components/Buttons/ButtonPlus'

import s from './styles'
import store from '../../store'

export default props => {

    return(
        <View style={s.page}>

            <Provider store={store}>
                <Header navigation={props.navigation} />
                <Bar />
                <Body props={props} />
                <ButtonPlus onPress={() => nextPage(props)} />
            </Provider>

        </View>
    )
}

function nextPage(props){
    props.navigation.navigate("Comida")
}