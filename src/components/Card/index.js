import React from 'react'
import {Text, View, ImageBackground, TouchableHighlight } from 'react-native'
import s from './styles'

export default props => {
    return(
        <>
            <View style={s.slider}>
                <ImageBackground source={props.image} style={s.slider_img} imageStyle={{borderRadius: 15}}>
                    <TouchableHighlight style={s.bt} onPress={props.onDetailClick}>
                        <View >
                            <Text style={{color:'white'}}>Começar</Text>
                        </View>
                    </TouchableHighlight>
                </ImageBackground>
                
                <Text style={s.title_s1}>Condicional</Text>
                <Text style={s.subTitle_s1}>11-14min | Sem equipamento</Text>
            </View>
        </>
    )
}