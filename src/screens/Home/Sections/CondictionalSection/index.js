import React from 'react'
import {Text, View } from 'react-native'
import Card from '../../../../components/Card'

import s from './styles'

const image = { uri: "https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Running/Galleries/10+track+mistakes/Front+Image.jpg" };

export default props => {
    return(
        <View style={s.container}>
            
            <Text style={s.title}>Ei Nark!</Text>
            <Text style={s.subTitle}>O Esforço de hoje decidira quem você será amanhã. Dê o seu melhor!</Text>

            <Card image={image} onPress={()=> props.navigation.navigate("Conditional")} />
        </View>
    )
}

function onDetailClick() {
    console.log("Navegando para outra tela")
    //Menu.navigate('Atividade')
    
}