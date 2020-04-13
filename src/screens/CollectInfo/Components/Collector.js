import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import Config from '../../../Config'

export default props => {
    const [value, onChangeText] = React.useState(0);

    const underlineColor = props.underlineColor? props.underlineColor : 'transparent'

    return(
        <View style={s.container}>
            
            <Text style={s.text}>{props.title}</Text>
            <TextInput 
                style={s.inputText}
                underlineColorAndroid={underlineColor}
                onChangeText={text => onChangeText(text)}
                placeholder={props.placeholder}
                placeholderTextColor="rgba(255,255,255,0.1)"
                keyboardType={'numeric'}
                autoFocus = {true}
                onSubmitEditing={(event) => {
                    if(value > 0){
                        props.callback(value)
                    }
                }}
            />
            <Text style={s.subtext}>Essa informação é confidencial e será usada nos calculos de calorias do seu perfil</Text>
        </View>
    )
}

const s = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Config.bacgroundPrimaryColor.color,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        color: 'white',
        fontSize: 30,
        margin: 20
    },
    inputText:{
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
    },
    subtext:{
        color:'rgba(255,255,255, 0.2)',
        marginHorizontal: 25,
        position:'absolute',
        bottom:15,
        fontSize: 12,
        // textAlign: 'center'
    }
})