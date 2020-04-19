import React, { useState } from 'react'
import {View, Text, TextInput, TouchableHighlight, ScrollView, Modal} from 'react-native'
import Feather from 'react-native-vector-icons/Feather';

import AmountFoodPopupModal from './components/AmountFoodPopupModal'
import {onChangeText, pushToArray, deleteItem, openModal} from './functions'
import s from './styles'
import {FoodIcon} from '../../../../components/Buttons/Components/ButtonList';

export default props =>{
    const [options, setOptions] = useState(props.options)
    const [selectedOptions, setSelectedOptions] = useState([])
    const [inputValue, setInputValue] = useState("")

    const [selectedItem, setSelectedItem] = useState("-")
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
                                <FoodIcon icon={obj.icon} count={obj.count} />
                                {/* <Text key={i} style={s.selectedItemText}>{obj.foodName}</Text> */}
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
                        <TouchableHighlight key={i}
                            onPress={() => 
                                openModal(obj, setSelectedItem, setModalVisible)}>
                            <View style={s.itemContainer}>
                                <View style={s.itemContainerLeft}>
                                    <FoodIcon icon={obj.icon} count={-1} />
                                    <Text style={s.item}>{obj.foodName}</Text>
                                </View>
                                <Text style={s.itemKcal}>{obj.kcal} kcal</Text>
                            </View>
                        </TouchableHighlight>
                    )
                })
            }
            </ScrollView>
            
            <AmountFoodPopupModal modalVisible={modalVisible} selectedItem={selectedItem} 
                close={(results) => 
                    pushToArray(results, selectedOptions, setSelectedOptions, 
                        setInputValue, props.options, setOptions, setModalVisible)} />

        </>
    )
}