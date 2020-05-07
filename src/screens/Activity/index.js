import React, {useState} from 'react'
import {View} from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from '../../store'
import Body from './components/Body'

import s from './styles'

export default props =>{

    return (
        <View style={s.container}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Body navigation={props.navigation} />
                </PersistGate>
            </Provider>
        </View>
    )
}

