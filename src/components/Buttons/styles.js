import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    item_past:{
        width:60,
        height:60,
        borderRadius:15,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        backgroundColor: '#373b42'
      },
      item_today:{
        width:60,
        height:60,
        borderRadius:15,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,

        borderColor: '#f35b1a',
        borderWidth: 1,
        
      },
      item_future:{
        width:60,
        height:60,
        borderRadius:15,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,

        borderColor: '#373b42',
        borderWidth: 1,
        
      },
      dia:{
        fontSize: 12,
        color: '#fff',
        fontWeight: 'bold'
      },
      mes:{
        fontSize: 12,
        color: '#fff'
      },

      item_backButton:{
        width:50,
        height:50,
        borderRadius:15,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,

        borderColor: '#373b42',
        borderWidth: 1,
      },

      item_horizontalButton2:{
        borderRadius:15,
        padding: 2,
        marginHorizontal:15,
        marginVertical: 5,
        justifyContent:'center'
      }
})