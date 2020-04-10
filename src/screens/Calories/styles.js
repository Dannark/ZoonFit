import {StyleSheet} from 'react-native'
import Config from '../../Config'

export default StyleSheet.create({
    page:{
        flex: 1,
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
})