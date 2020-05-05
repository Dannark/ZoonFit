import React from 'react'
import {View} from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from '../../store'

import Header from './components/Header'
import Bar from './components/Bar'
import Body from './components/Body'
import ButtonPlus from '../../components/Buttons/ButtonPlus'

import s from './styles'

export default props => {

    return(
        <View style={s.page}>

            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Header navigation={props.navigation} />
                    <Bar />
                    <Body props={props} />
                    <ButtonPlus onPress={() => nextPage(props)} />
                </PersistGate>
            </Provider>

        </View>
    )
}

function nextPage(props){
    props.navigation.navigate("Comida")
}