import React, {useState} from 'react'
import {View, Text} from 'react-native'
import FoodCategorySelector from './components/FoodCategorySelector'
import FoodSeachBox from './components/FoodSeachBox'
import Header from './components/Header'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from '../../store'

import s from './styles'

export default props =>{
    const [mealType, setMealType] = useState("Refeição");

    return (
        <View style={s.container}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                <Header title="Alimentação" subtitle="Seleção de alimentos" navigation={props.navigation} />
                <FoodCategorySelector mealType={mealType} setMealType={setMealType} />
                <FoodSeachBox placeholder="Comida..." navigation={props.navigation}
                    mealType={mealType} />
                </PersistGate>
            </Provider>
        </View>
    )
}

