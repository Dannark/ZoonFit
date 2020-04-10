import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default props => {
    return(
        <View style={s.container}>
            
            <View style={{flexDirection:'row'}}>
                <View style={s.circle}></View>
                <View style={s.textContainer}>
                    <Text style={s.textTitle}>Comida</Text>
                    <Text style={s.textSubtitle}>+250g</Text>
                </View>
            </View>
            <Text style={s.textSubtitle}>08:00</Text>
        </View>
    )
}

const s = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(0,0,0,0.05)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        paddingRight: 15,
        marginVertical: 1
    },
    circle:{
        width: 50,
        height: 50,
        backgroundColor: 'rgba(255,255,255, 0.2)',
        borderRadius: 50,
        marginHorizontal: 10,
    },
    textContainer:{

    },
    textTitle:{
        color: 'white',
        fontSize: 18,
    },
    textSubtitle:{
        color: 'gray',
        fontSize: 13
    }
})