import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import nophoto from '../../../img/dannark.jpg'
import photo from '../../../img/dannark.jpg'

export default props => {
    return(
        <View style={s.container}>
            <View style={s.userPhotoCircle}>
                <View style={s.userPhotoContainer}>
                    {/* <FontAwesome name="user-circle" size={100} color="rgba(255,255,255,0.5)"  /> */}
                    <ImageBackground source={photo} style={s.userPhoto} imageStyle={{borderRadius: 50}} />
                </View>
            </View>

            <Text style={s.titleText}>Daniel Queiroz</Text>

        </View>
    )
}

const s = StyleSheet.create({
    container:{
        justifyContent:"center", 
        alignItems:'center',
        backgroundColor: 'rgba(0,0,0,0.15)',
        padding: 25
    },
    userPhotoCircle:{
        backgroundColor: 'rgba(0,0,0,0.0)', 
        width:120, 
        height:120, 
        margin:10,
        borderRadius:100, 
        borderColor: 'rgba(255,255,255,0.2)',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    userPhotoContainer:{
        backgroundColor:'rgba(255,255,255,0.01)', 
        width:100, 
        height:100, 
        borderRadius:50, 
    },
    userPhoto:{
        width: '100%', 
        height: '100%', 
        borderRadius:50, 
    },
    titleText:{
        color: 'white',
        fontWeight: 'bold',
    }
})