import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    box:{
        flex:1,
        backgroundColor: '#373b42'  
    },
    container:{
        justifyContent:"center", 
        alignItems:'center',
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    userPhotoCircle:{
        backgroundColor: 'rgba(0,0,0,0.0)', 
        width:120, 
        height:120, 
        margin:35,
        borderRadius:100, 
        borderColor: 'rgba(255,255,255,0.2)',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    userPhotoContainer:{
        backgroundColor:'gray', 
        width:100, 
        height:100, 
        borderRadius:50, 
    },
    userPhoto:{
        width: '100%', 
        height: '100%', 
        borderRadius:50, 
    }
})