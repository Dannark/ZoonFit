import React, { useState } from 'react'
import {StyleSheet, View, Text, Modal, TouchableHighlight, TextInput} from 'react-native'
import Config from '../../../../../Config'

export default props =>{
    const [unit, setUnit] = useState("x1")
    const [kcal, setKcal] = useState("50")

    const foodName = props.foodName? props.foodName: "Maça"

    return(
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.modalVisible}
            onRequestClose={() => {
                //alert('Modal has been closed.');
                props.close();
            }}
            >
            <View style={s.modalContainer}>
                <View style={s.innerContainer}>
                    <Text style={s.textTitle}>Quantas {foodName} você ingeriu?</Text>

                    <View style={s.form}>
                        <Text style={s.text}>Unidades: </Text>
                        <TextInput 
                            value={unit}
                            style={s.inputText}
                            onChangeText={text => onUnitChangeText(text, setUnit)}
                            placeholderTextColor="rgba(255,255,255,0.1)"
                            keyboardType={'numeric'}
                            autoFocus = {true}
                            onSubmitEditing={(event) => {
                                if(value > 0){
                                    props.callback(value)
                                }
                            }}
                        />
                        <Text style={s.text}> de </Text>
                        <TextInput 
                            value={kcal}
                            style={s.inputText}
                            onChangeText={text => onKcalChangeText(text, setKcal)}
                            placeholderTextColor="rgba(255,255,255,0.1)"
                            keyboardType={'numeric'}
                            //autoFocus = {true}
                            onSubmitEditing={(event) => {
                                if(value > 0){
                                    props.callback(value)
                                }
                            }}
                        />
                        <Text style={s.text}>Calorias</Text>
                    </View>

                    <TouchableHighlight
                        onPress={() => {
                            props.close();
                        }}>
                        <Text style={s.text}>Adicionar</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
    )
}

function onUnitChangeText(text, setUnit){
    let newVal = text
    
    if(newVal== ""){
        newVal = "x1"
    }
    if(newVal.indexOf('x') == -1){
        newVal = "x"+newVal
    }
    console.log(newVal.indexOf('x'))
    setUnit(newVal)
}

function onKcalChangeText(text, setKcal){
    let newVal = text
    setKcal(newVal)
}

const s = StyleSheet.create({
    modalContainer:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer:{
        width: '80%',
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Config.bacgroundPrimaryColor.color,
        borderRadius: 15
    },
    textTitle:{
        color: 'white',
        fontWeight:'bold',
        fontSize: 16
    },
    text:{
        color: 'white'
    },

    form:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15
    },

    inputText:{
        color: 'white',
        fontSize: 18,
        backgroundColor: 'rgba(0,0,0,0.1)',
        width: 50,
        
        padding: 5,
        paddingLeft:10,
        marginHorizontal: 5
    }
})