import React from 'react'
import {Text, View, ImageBackground, TouchableHighlight } from 'react-native'
import ButtonGradient from '../Buttons/ButtonGradient'
import s from './styles'

export default props => {
    return(
        <>
            <View style={s.slider}>
                <ImageBackground source={props.image} style={s.slider_img} imageStyle={{borderRadius: 15}}>
                    
                </ImageBackground>
                
                <Text style={s.title_s1}>Condicional</Text>
                <Text style={s.subTitle_s1}>11-14min | Sem equipamento</Text>
                
                <View  style={s.bt} >
                    <ButtonGradient title="Começar!" onPress={props.onPress}/>
                </View>
                
            </View>
        </>
    )
}