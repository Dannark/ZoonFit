import {StyleSheet } from 'react-native'

export default StyleSheet.create({
    toucharea:{
        padding:15,
        borderRadius:10
    },
    container_status:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        
        marginVertical: 40
      },
      container_status_item:{
        alignItems: 'center',
      },
      bigText:{
        color:'white',
        fontWeight: 'bold',
        fontSize:40,
      },
      midText:{
        color:'#a3a5a8',
        fontSize:16,
        marginBottom:6
      },
      smallText:{
        color:'#606265'
      },
})