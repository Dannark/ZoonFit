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


      calContainer:{
        paddingHorizontal: 30,
        paddingBottom: 30
      },
      calTextContainer:{
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingHorizontal: 10
        // justifyContent: 'center'
      },
      calTextCurrent:{
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
      },
      calTextMax:{
        color: 'gray',
        fontSize: 14,
        marginLeft: 7,
        paddingBottom: 7
      },
      progressContainer:{
        justifyContent:'center',
      },
      barContainer:{
        backgroundColor: 'rgba(255,255,255,0.1)',
        height: 4,
        borderRadius: 4
      },
      bar:{
        backgroundColor: Config.primaryColor.color,
        height: '100%',
        borderRadius: 3
      }
})