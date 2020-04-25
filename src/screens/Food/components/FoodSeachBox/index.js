import React, { useState } from 'react'
import {View, Text, TextInput, TouchableHighlight, FlatList} from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment';

import AmountFoodPopupModal from './components/AmountFoodPopupModal'
import {onChangeText, pushToArray, deleteItem, openModal} from './functions'
import s from './styles'
import {FoodIcon} from '../../../Calories/components/ButtonList';

export default props =>{
    const originalFoodOptions = useSelector(state => state.data)
    const selectedDay = useSelector(state => 
        state.daysWorked[state.selectedDayIndex] != undefined ?
                state.daysWorked[state.selectedDayIndex] : [] )
    const dispatch = useDispatch()
    
    const [options, setOptions] = useState(originalFoodOptions)
    const [selectedOptions, setSelectedOptions] = useState([])
    const [inputValue, setInputValue] = useState("")

    const [selectedItem, setSelectedItem] = useState("-")
    const [modalVisible, setModalVisible] = useState(false)

    function addFood(){
        
        if(selectedOptions.length > 0){
            var hour = moment().format('hh:mm');
            
            const food = {
                key: Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1),
                name: props.mealType,
                time: hour,
                foods: [...selectedOptions]
            }

            let newCaloriesFood = []
            if(selectedDay.caloriesFood != undefined){
                newCaloriesFood = [...selectedDay.caloriesFood]
            }
            
            const newDay = {
                ...selectedDay, 
                caloriesFood: [ ...newCaloriesFood, {...food}]//...food
            }
            
            dispatch({type: 'ADD_OR_REPLACE_DAY', newDay})
            props.navigation.navigate("Calorias")
        }
    }

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
            <View style={s.contsainer}>
                <TextInput 
                    value={inputValue}
                    style={s.inputText}
                    onChangeText={text => onChangeText(text, originalFoodOptions, setOptions, setInputValue)}
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
            
            <FlatList 
                data={options}
                renderItem={({item, index}) =>
                    <TouchableHighlight
                        onPress={() => 
                            openModal(item, setSelectedItem, setModalVisible)}>
                        <View style={s.itemContainer}>
                            <View style={s.itemContainerLeft}>
                                <FoodIcon icon={item.icon} count={-1} />
                                <Text style={s.item}>{item.foodName}</Text>
                            </View>
                            <Text style={s.itemKcal}>{item.kcal} kcal</Text>
                        </View>
                    </TouchableHighlight>
                }
                keyExtractor={(item, index) => ""+index}
                >
            </FlatList>
            
            <AmountFoodPopupModal modalVisible={modalVisible} selectedItem={selectedItem} 
                close={(results) => 
                    pushToArray(results, selectedOptions, setSelectedOptions, 
                        setInputValue, originalFoodOptions, setOptions, setModalVisible)} />

            <TouchableHighlight onPress={addFood} style={s.done}>
                <Feather name="check" size={20} color="white" style={s.search} />
            </TouchableHighlight>
        </>
    )
}