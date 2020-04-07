import {StyleSheet} from 'react-native'
import Config from '../../../Config'

export default StyleSheet.create({
    container:{
        marginTop:12,
        borderRadius:15
    },
    slider_img:{
        backgroundColor:'rgba(64, 64, 64, 0.0)',
    },
    selectedText:{
        color: Config.primaryColor.color,
        fontSize: 18,
        fontWeight: 'bold',
        position: 'absolute',
        backgroundColor:'rgba(0,0,0,0.0)',
        borderRadius:9,
        paddingHorizontal: 4
    }
})