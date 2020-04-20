import React, {useState} from 'react'
import {View, Text} from 'react-native'
import FoodCategorySelector from './components/FoodCategorySelector'
import FoodSeachBox from './components/FoodSeachBox'
import Header from './components/Header'
import { Provider } from 'react-redux'
import store from '../../store'

import s from './styles'

export default props =>{
    const [mealType, setMealType] = useState("Refeição");

    return (
        <View style={s.container}>
            <Provider store={store}>
                <Header title="Alimentação" subtitle="Seleção de alimentos" navigation={props.navigation} />
                <FoodCategorySelector mealType={mealType} setMealType={setMealType} />
                <FoodSeachBox placeholder="Comida..." navigation={props.navigation}
                    mealType={mealType} />
            </Provider>
        </View>
    )
}

