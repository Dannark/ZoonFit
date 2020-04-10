import {StyleSheet} from 'react-native'
import Config from '../../Config'

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Config.bacgroundPrimaryColor.color
    },
    header:{
        marginHorizontal:10,
        marginVertical:25,
        flexDirection: 'row'
      },
    small_title:{
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        marginHorizontal: 10
    },
    sub_title:{
        color: '#606265',
        marginHorizontal: 10
    },

    cardImg:{
        backgroundColor:'rgba(64, 64, 64, 0.4)',
        height: 250,
        borderRadius:15,
        marginHorizontal:20,
        marginBottom: 5
    },
    miniCardImg:{
        backgroundColor:'rgba(64, 64, 64, 0.4)',
        width: 150,
        height: 200,
        borderRadius:15,
        marginHorizontal:5,
        marginBottom: 5
    },

    texttag:{
        color:'#474747',
        marginTop: 10,
        marginLeft:20,
        marginBottom:5,
        fontWeight:'bold',
        fontSize:15
      }
})