import React, { useState } from 'react'
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native'
import Config from '../../../Config'
import Feather from 'react-native-vector-icons/Feather';

export default props => {
    const [msgStage, setMsg] = useState(0)
    const TMB = props.TMB? props.TMB: 2000
    return(
        <>
            <View style={s.container}>
                <View style={s.tmbContainer}>
                    <Text style={s.tmbsmall}>TMB</Text>
                    <Text style={s.tmb}>{TMB}</Text>
                </View>
                <Text style={s.title}>Parabéns!</Text>
                {
                    msgStage == 0?
                        <Text style={s.text}>O seu TMB (Taxa Metabólica Basal) 
                        é de <Text style={s.textBigger}>{TMB}</Text> kcal ou seja, o quanto o 
                        seu organismo gasta de energia para manter as atividades vitais 
                        básicas em funcionamento.</Text>
                    
                    :<Text style={s.text}>O segredo para emagrecer é
                        <Text style={s.boldText}> ingerir menos calorias</Text> do que seu 
                        <Text style={s.boldText}> TMB!</Text>
                        {"\n\n"}Você também pode praticar exercicios fisicos para aumentar seu TMB </Text>
                }
                
                <TouchableHighlight onPress={() => onPress(msgStage, setMsg, props)} style={s.nextButton}>
                    <Feather name="chevron-right" size={30} color="white"  />
                </TouchableHighlight>
            </View>
        </>
    )
}

function onPress(msgStage, setMsg, props){
    if(msgStage == 0){
        setMsg(1)
    }
    else{
        props.callback()
    }
}

const s = StyleSheet.create({
    container:{
        flex: 1,
        padding: 45,
        backgroundColor: Config.bacgroundPrimaryColor.color,
        justifyContent: 'center',
        alignItems: 'center'
    },

    tmbContainer:{
        width: 130,
        height: 130,
        borderWidth: 1,
        borderRadius: 100,
        borderColor: Config.primaryColor.color,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40
    },
    tmb:{
        color: "white",
        fontSize: 35,
    },
    tmbsmall:{
        color:'rgba(255,255,255, 0.25)'
    },
    title:{
        color:"white",
        fontSize: 32,
        marginBottom: 20,
        fontWeight: 'bold'
    },
    text:{
        color:"rgba(255,255,255, 0.9)",
        fontSize: 19,
        textAlign: 'center',
        marginBottom: 70
    },
    textBigger:{
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    },
    boldText:{
      fontWeight: 'bold',
    },

    nextButton:{
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 60,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 20,
        bottom: 30
    }
})