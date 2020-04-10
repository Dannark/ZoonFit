import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet} from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import GradientRect from './Components/GradientRect';
import GradientCircle from './Components/GradientCircle';

export default props => {
  
  const checked = props.checked?true:false
  const current = props.current?true:false

  return(
    <TouchableHighlight style={s.container} underlayColor='rgba(241,96,43,0.8)' onPress={() => pressed(props)}>
        <View>
          {current? <GradientRect /> : null}

          <View style={s.alignHorizontally}>
            <View style={{flexDirection: 'row', alignItems:'center'}}>
              <View style={[s.circle, (current?s.circle_selected:s.circle_deselected)]}>
                {
                  checked? 
                  <>
                    <GradientCircle  />
                    <Feather name="check" size={19} color="#fff"  />
                  </>
                  :<Text style={{color:'#808080', fontWeight:'bold'}}>{props.id}</Text>
                }
              </View>
              
              <Text style={[s.text, (current || checked? s.subTextSelected : s.subTextNotSelected)]}>
                {props.text}
              </Text>
            </View>
            <Text style={current? s.subTextSelected : s.subTextNotSelected}>{props.subtext}</Text>
          </View>
        </View>
    </TouchableHighlight>
  )
}

function pressed(props){
  //make animations here if necessary
  props.onPress()
}

const s = StyleSheet.create({
  container:{
    backgroundColor: `rgba(61, 64, 69, 0.9)`,
    borderRadius:15,
    marginHorizontal:15,
    marginVertical: 5,
    justifyContent:'center'
  },
  alignHorizontally:{
    flexDirection: 'row', justifyContent:'space-between', alignItems:'center', padding: 13
  },
  circle:{
    borderRadius:50, 
    width: 30, 
    height: 30, 
    alignItems:'center', 
    justifyContent:'center',
  },
  circle_selected:{
    backgroundColor:'white'
  },
  circle_deselected:{
    backgroundColor:'rgba(30,32,36,1)'
  },

  text:{
    color:'white', fontWeight: 'bold', marginLeft:10, fontSize: 16
  },
  subTextSelected:{
    color:'white'
  },
  subTextNotSelected:{
    color:'#808080'
  }
})