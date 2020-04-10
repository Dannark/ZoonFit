import { StyleSheet } from 'react-native'
import Config from '../../../../Config'

export default StyleSheet.create({
  headerContainer:{
    marginHorizontal:10,
    marginVertical:25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  big_title:{
    color: 'white',
    fontSize: 45,
    fontWeight: 'bold',
    marginLeft: 10
  },
  top_title:{
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginHorizontal: 10
  },
  sub_title:{
    color: '#606265',
    marginHorizontal: 10
  },
  bar_background:{
    width: '90%',
    height: 4,
    borderRadius: 4,
    marginLeft: 10,
    marginBottom: 12,
    backgroundColor: Config.secondaryColor.color
  },
  bar_progress:{
    height: '100%',
    borderRadius: 4,
    backgroundColor: Config.primaryColor.color
  },
})