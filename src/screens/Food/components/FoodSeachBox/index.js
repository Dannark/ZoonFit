import React, { useState } from 'react'
import {View, Text, TextInput, TouchableHighlight, ScrollView, Modal} from 'react-native'
import Feather from 'react-native-vector-icons/Feather';

import {onChangeText, pushToArray, deleteItem} from './functions'
import s from './styles'
import AmountFoodPopupModal from './components/AmountFoodPopupModal'

export default props =>{
    const [options, setOptions] = useState(props.options)
    const [selectedOptions, setSelectedOptions] = useState([])
    const [inputValue, setInputValue] = useState("")

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <>  
            <View style={s.selectedOptionsContainer}>
                <Text style={s.floatText}>Prato</Text>
                {
                    selectedOptions.map((obj, i) => {
                        return(
                            <TouchableHighlight key={i} style={s.selectedItem} 
                                onPress={() => deleteItem(i, selectedOptions, setSelectedOptions)}>
                                <Text key={i} style={s.selectedItemText}>{obj}</Text>
                            </TouchableHighlight>
                            
                        )
                    })
                }
            </View>
            <View style={s.container}>
                <TextInput 
                    value={inputValue}
                    style={s.inputText}
                    onChangeText={text => onChangeText(text, props.options, setOptions, setInputValue)}
                    placeholder={props.placeholder}
                    placeholderTextColor="rgba(255,255,255,0.1)"
                    autoFocus = {true}
                    onSubmitEditing={(event) => {
                        if(value > 0){
                            props.callback(value)
                        }
                    }}
                />
                <Feather name="search" size={19} color="gray" style={s.search} />
            </View>
            
            <ScrollView >
            {
                options.map((obj, i) => {
                    return(
                        <TouchableHighlight key={i} style={s.itemContainer} 
                            onPress={() => pushToArray(obj, selectedOptions, setSelectedOptions, 
                                setInputValue, props.options, setOptions, setModalVisible)}>
                            <Text style={s.item}>{obj}</Text>
                        </TouchableHighlight>
                    )
                })
            }
            </ScrollView>
            
            <AmountFoodPopupModal modalVisible={modalVisible} close={() => setModalVisible(false)} />

        </>
    )
}