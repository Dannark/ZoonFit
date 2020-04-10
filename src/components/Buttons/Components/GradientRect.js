import React from 'react'
import {View, StyleSheet} from 'react-native'
import Svg, {Defs, LinearGradient, Stop, Rect } from 'react-native-svg'

const Config = {
    widthContainer: 100,
    paddingVertical: 5,
}

export default props =>{
    
    const color1 = props.color1? props.color1: 'rgba(254,108,46,1)'
    const color2 = props.color2? props.color2: 'rgba(252,67,39,1)'
    const borderRadios = props.borderRadios? props.borderRadios : 15
    Config.widthContainer = props.width? props.width : 100
    Config.paddingVertical = props.paddingVertical? props.paddingVertical : 20

    const alpha1 = props.alpha1? props.alpha1: 1
    const alpha2 = props.alpha2? props.alpha2: 1

    return(
        <View style={s.btContainer}>
            <Svg style={{width: "100%", height: "100%"}}>
                <Defs>
                    <LinearGradient
                        id="Gradient"
                        gradientUnits="userSpaceOnUse"
                        x1="0%" y1="0%" x2="100%" y2="0%"
                        >
                        <Stop offset="0" stopColor={color1} stopOpacity={alpha1} />
                        <Stop offset="1" stopColor={color2} stopOpacity={alpha2} />
                    </LinearGradient>
                </Defs>

                <Rect
                    x="0"
                    y="0"
                    rx={borderRadios} ry={borderRadios}
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
        width: '100%',
        height: '100%',
    }
})