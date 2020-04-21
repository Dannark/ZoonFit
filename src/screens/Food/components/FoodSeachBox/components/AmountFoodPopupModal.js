import React, { useState } from 'react'
import {View, Text, Modal, TouchableHighlight, TextInput} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import {updateVal, getTotal} from './functions'

import s from './styles'

let previousObj = null

export default props =>{
    const [unit, setUnit] = useState("x1")
    const food = props.selectedItem
    const [grams, setGrams] = useState("100")

    setTimeout(() => {
        if(food.grams != undefined && previousObj != food){
            previousObj = food
            setGrams(""+food.grams)
        }
    }, 100)

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
                        <Text style={s.text}>
                            {food.unit == "unit"? "Unidades: "
                            :food.unit == "portion"? "Porção: "
                            : "Quantidade: "
                            }
                        </Text>
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
                                onPress={() => updateVal(setGrams,grams,10)}>
                                <AntDesign name="up" size={20} color="white"  />
                            </TouchableHighlight>
                            <TextInput 
                                value={grams}
                                style={s.inputText}
                                onChangeText={text => onKcalChangeText(text, setGrams)}
                                placeholderTextColor="rgba(255,255,255,0.1)"
                                keyboardType={'numeric'}
                                onSubmitEditing={(event) => {
                                    
                                }}
                            />
                            <TouchableHighlight style={s.arrowButton}
                                onPress={() => updateVal(setGrams,grams,-10)}>
                                <AntDesign name="down" size={20} color="white"  />
                            </TouchableHighlight>
                        </View>
                        
                        <Text style={s.text}>Gramas</Text>
                    </View>

                    <Text style={s.smallText}>
                        <Text style={s.textBigTitle}>{getTotal(unit, food.kcal, grams)[3]} </Text>
                        kcal
                    </Text>

                    <TouchableHighlight style={s.addButton}
                        onPress={() => {
                            var newFood = {
                                foodName: food.foodName, 
                                icon: food.icon,
                                count: getTotal(unit, food.kcal, grams)[0],
                                kcal: getTotal(unit, food.kcal, grams)[1],
                                grams: getTotal(unit, food.kcal, grams)[2]
                            }
                            
                            props.close(newFood); //, getTotal(unit, kcal)[1]
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
    
    setUnit(newVal)
}

function onKcalChangeText(text, setKcal){
    let newVal = text
    setKcal(newVal)
}

