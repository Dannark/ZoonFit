import React from 'react'
import {View, Text} from 'react-native'
import FoodCategorySelector from './components/FoodCategorySelector'
import FoodSeachBox from './components/FoodSeachBox'

import s from './styles'

export default props =>{
    return (
        <View style={s.container}>
            <FoodCategorySelector options={["Refeição", "Lanche", "Café da manhã", "Almoço", "Janta"]} />
            <FoodSeachBox placeholder="Comida..." options={["Maça", 'Banana', 'Arroz', 'Feijão']} />
            
        </View>
    )
}

