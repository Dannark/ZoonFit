import React from 'react'
import {View, Text} from 'react-native'
import {HorizontalButton2} from '../../../../components/Buttons'
import s from './styles'

export default props =>{
    return(
        <>
            <Text style={s.texttag}>CONHECIMENTO</Text>
            <HorizontalButton2 featherIcon={"droplet"} text={"Copos de água"} subtext={"1 min atrás"} />
            <HorizontalButton2 materialcommunityicon={"food-apple-outline"} text={"Calorias"} subtext={"25 min atrás"} 
                onPress={() => props.navigation.navigate("Calorias")}/>
            <HorizontalButton2 featherIcon={"activity"} text={"Atividades"} subtext={"2 min atrás"} 
                onPress={() => props.navigation.navigate("Atividade")}/>
        </>
    )
}