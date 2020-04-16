import React, { useState } from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'
import {Picker} from '@react-native-community/picker';

export default props =>{
    const [selectedIndex, setSelectedIndex] = useState(0);
    
    return (
        <>  
            <View style={s.container}>
                <Picker
                    selectedValue={props.options[selectedIndex]}
                    style={s.item}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedIndex(itemIndex)
                    }>
                    {
                    props.options.map((item, index) => {
                        return <Picker.Item key={index} label={item} value={item} />
                    })
                    }
                </Picker>
            </View>
        </>
    )
}

function onChangeText(text){
    
}

const s = StyleSheet.create({
    container:{
        paddingHorizontal: 15
    },
    inputText:{
        backgroundColor: 'rgba(0,0,0,0.1)',
        color: 'white',
        fontSize: 20,
        paddingLeft: 50,
        paddingVertical: 14
    },
    search:{
        position: 'absolute',
        left: 15,
        top: 17
    },

    item:{
        paddingHorizontal: 10,
        height: 50,
        color:'white',
    },
})