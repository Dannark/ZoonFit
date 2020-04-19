import React, { useState } from 'react'
import {View, Text, Modal, TouchableHighlight, TextInput} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import {updateVal, getTotal} from './functions'

import s from './styles'

export default props =>{

    const [unit, setUnit] = useState("x1")
    const [kcal, setKcal] = useState("50")

    const food = props.selectedItem? props.selectedItem: "Maça"

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
                    <Text style={s.textTitle}>Quantas {food.foodName} você ingeriu?</Text>

                    <View style={s.form}>
                        <Text style={s.text}>Unidades: </Text>
                        <View style={{alignItems:'center'}} onPress={() => setUnit(unit+1)}>
                            <TouchableHighlight style={s.arrowButton}
                                onPress={() => updateVal(setUnit,unit,1, "x")}>
                                <AntDesign name="up" size={20} color="white"  />
                            </TouchableHighlight>
                            <TextInput 
                                value={unit}
                                style={s.inputText}
                                onChangeText={text => onUnitChangeText(text, setUnit)}
                                placeholderTextColor="rgba(255,255,255,0.1)"
                                keyboardType={'numeric'}
                                autoFocus = {true}
                                
                            />
                            <TouchableHighlight style={s.arrowButton}
                                onPress={() => updateVal(setUnit,unit,-1, "x")}>
                                <AntDesign name="down" size={20} color="white"  />
                            </TouchableHighlight>
                        </View>
                        
                        <Text style={s.text}> de </Text>
                        <View style={{alignItems:'center'}}>
                            <TouchableHighlight style={s.arrowButton}
                                onPress={() => updateVal(setKcal,kcal,10)}>
                                <AntDesign name="up" size={20} color="white"  />
                            </TouchableHighlight>
                            <TextInput 
                                value={kcal}
                                style={s.inputText}
                                onChangeText={text => onKcalChangeText(text, setKcal)}
                                placeholderTextColor="rgba(255,255,255,0.1)"
                                keyboardType={'numeric'}
                                onSubmitEditing={(event) => {
                                    
                                }}
                            />
                            <TouchableHighlight style={s.arrowButton}
                                onPress={() => updateVal(setKcal,kcal,-10)}>
                                <AntDesign name="down" size={20} color="white"  />
                            </TouchableHighlight>
                        </View>
                        
                        <Text style={s.text}>Calorias</Text>
                    </View>

                    <Text style={s.smallText}>
                        <Text style={s.textBigTitle}>{getTotal(unit, kcal)[2]} </Text>
                        kcal
                    </Text>

                    <TouchableHighlight style={s.addButton}
                        onPress={() => {
                            food.count = getTotal(unit, kcal)[0]
                            food.kcal = getTotal(unit, kcal)[1]
                            props.close(food); //, getTotal(unit, kcal)[1]
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

