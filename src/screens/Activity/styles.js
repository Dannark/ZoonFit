import { StyleSheet } from 'react-native'
import Config from '../../Config'

export default StyleSheet.create({
    page:{
      height: '100%',
      backgroundColor: Config.bacgroundPrimaryColor.color,
  
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

    statusContainer:{
      width: '100%',
      flexDirection: 'row',
      marginLeft: 10,
      marginVertical: 7,
      alignItems: 'center',
    },
    statusNameContainer:{
      width: 60,
      alignItems: 'center'
    },
    textStatusName:{
      color:'white',
      fontSize: 14
    },
    statusDisplay:{
      width: '70%',
      marginLeft: 15,
      paddingLeft: 30,
      height:60,
      justifyContent: 'center',
    },
    textStatusPercentage:{
      color:'white',
      fontWeight:'bold',
      fontSize: 20
    },


  })