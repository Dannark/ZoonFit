import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Svg, {Ellipse, Circle, Defs, LinearGradient, Stop, Mask, Rect, Use} from 'react-native-svg'

const Config = {
    widthContainer: 100,
    paddingVertical: 5,
}

export default props =>{
    
    const title = props.title? props.title: "Ok"
    const color1 = props.color1? props.color1: 'rgba(254,108,46,1)'
    const color2 = props.color2? props.color2: 'rgba(252,67,39,1)'
    const borderRadios = props.borderRadios? props.borderRadios : 10
    Config.widthContainer = props.width? props.width : 100
    Config.paddingVertical = props.paddingVertical? props.paddingVertical : 20

    return(
        <TouchableOpacity style={s.bt} activeOpacity={.75} onPress={props.onPress}>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: (Config.paddingVertical/2),
                width: Config.widthContainer,
            }}>
                <Svg style={{width: "100%", height: "100%", position: 'absolute', 
                    paddingVertical: Config.paddingVertical}}>
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

                    <Rect
                        x="0"
                        y="0"
                        rx={borderRadios} ry={borderRadios}
                        width="100%"
                        height="100%"
                        fill="url(#Gradient)"
                    />
                </Svg>
                <Text style={s.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const s = StyleSheet.create({
    text:{
        color: 'white',
        fontWeight:'bold'
    },
    bt:{
        
    }
})