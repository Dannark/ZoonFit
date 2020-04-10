import React from 'react'
import {View, StyleSheet} from 'react-native'
import Svg, {Defs, LinearGradient, Stop, Circle} from 'react-native-svg'

const Config = {
    radius: 15,
}

export default props =>{
    
    const color1 = props.color1? props.color1: 'rgba(254,108,46,1)'
    const color2 = props.color2? props.color2: 'rgba(252,67,39,1)'
    Config.radius = props.radius? props.radius : 15

    return(
        <View style={s.btContainer}>
            <Svg style={{width: "100%", height: "100%"}}>
                <Defs>
                    <LinearGradient
                        id="Gradient"
                        gradientUnits="userSpaceOnUse"
                        x1="0%" y1="0%" x2="100%" y2="0%"
                        >
                        <Stop offset="0" stopColor={color1} stopOpacity="1" />
                        <Stop offset="1" stopColor={color2} stopOpacity="1" />
                    </LinearGradient>
                </Defs>

                <Circle
                    cx={Config.radius}
                    cy={Config.radius}
                    r={Config.radius}
                    width="100%"
                    height="100%"
                    fill="url(#Gradient)"
                />
            </Svg>
        </View>
    )
}

const s = StyleSheet.create({
    text:{
        color: 'white',
        fontWeight:'bold'
    },
    btContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: Config.radius*2,
        height: Config.radius*2,
    }
})