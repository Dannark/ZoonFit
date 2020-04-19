import React from 'react'
import {View, Text} from 'react-native'
import FoodCategorySelector from './components/FoodCategorySelector'
import FoodSeachBox from './components/FoodSeachBox'
import Header from './components/Header'

import s from './styles'

export default props =>{

    const data = [
        {foodName:"Maça", icon:"apple", kcal:50},
        {foodName:"Biscoito", icon:"cookie", kcal:50},
        {foodName:"Ovo", icon:"egg", kcal:50},
        {foodName:"Banana", icon:"banana", kcal:50},
        {foodName:"Uva", icon:"grapes", kcal:50},
        {foodName:"Arroz", icon:"rice", kcal:250},
        {foodName:"Feijão", icon:"beans", kcal:250},
        {foodName:"Salada", icon:"salad", kcal:50},
        {foodName:"Cenoura", icon:"carrot", kcal:50},
        {foodName:"Refrigerante", icon:"soda", kcal:250},
        {foodName:"Sanduiche da tarde", icon:"sandwich", kcal:250}
    ]
    return (
        <View style={s.container}>
            <Header title="Alimentação" subtitle="Seleção de alimentos" navigation={props.navigation} />
            <FoodCategorySelector options={["Refeição", "Lanche", "Café da manhã", "Almoço", "Janta"]} />
            <FoodSeachBox placeholder="Comida..." options={data} />
            
        </View>
    )
}

