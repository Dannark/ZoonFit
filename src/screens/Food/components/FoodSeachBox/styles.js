import {StyleSheet} from 'react-native'
import Config from '../../../../Config';

export default StyleSheet.create({
    container:{
        
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
        color: 'white',
        paddingHorizontal: 20,
        paddingVertical: 8,
        fontSize: 16,
    },

    selectedOptionsContainer:{
        flexDirection: 'row',
        padding: 8,
        margin:10,
        flexWrap: 'wrap',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        borderRadius: 15,
        // justifyContent: 'center',
        // minHeight: 86
    },
    floatText:{
        color: 'gray',
        position: 'absolute',
        left: 20,
        top: -12,
        backgroundColor: Config.bacgroundPrimaryColor.color,
        paddingHorizontal: 5
    },
    selectedItem:{
        backgroundColor: 'rgba(0,0,0,0.2)',
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3
    },
    selectedItemText:{
        color: 'white',
    },

    itemContainer:{
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    itemContainerLeft:{
        flexDirection: 'row',
    },
    itemKcal:{
        color: 'gray',
        fontSize: 13
    },

    done:{
        position: 'absolute',
        right: 20,
        bottom: 20,
        zIndex: 5,
        backgroundColor: Config.primaryColor.color,
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
})