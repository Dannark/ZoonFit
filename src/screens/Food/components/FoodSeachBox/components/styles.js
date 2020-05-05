import {StyleSheet} from 'react-native'
import Config from '../../../../../Config'

export default StyleSheet.create({
    modalContainer:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer:{
        width: '80%',
        paddingVertical: 20,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Config.bacgroundPrimaryColor.color,
        borderRadius: 15,
    },
    textTitle:{
        color: 'white',
        fontWeight:'bold',
        fontSize: 17,
        textAlign: 'center',
    },
    text:{
        color: 'white'
    },
    textBigTitle:{
        color: 'white',
        fontWeight:'bold',
        fontSize: 24
    },
    smallText:{
        color: 'gray'
    },

    form:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 5
    },

    inputText:{
        color: 'white',
        fontSize: 18,
        backgroundColor: 'rgba(0,0,0,0.1)',
        width: 50,
        
        padding: 5,
        paddingLeft:10,
        marginHorizontal: 5
    },
    arrowButton:{
        padding: 5,
        margin: 5,
        borderRadius: 10
    },
    addButton:{
        marginTop: 15,
        paddingVertical: 7,
        paddingHorizontal: 15,
        backgroundColor: 'black',
        borderWidth: 0,
        borderRadius: 10
    }
})