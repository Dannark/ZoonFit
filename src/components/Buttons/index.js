import React from 'react'
import {Text, View, Image, TouchableHighlight, BackHandler} from 'react-native'
import {notificar} from '../Menssagem'
import s from './styles'
import Config from '../../Config'
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

function getDayButton(props){
  const dia = props.day[0]
  const mes = props.day[1]
  const buttonType = props.day[3]
  if(buttonType=="checked"){
    return (
      <TouchableHighlight style={s.item_past} onPress={props.onPress}>
        <View style={{alignItems:'center'}}>
            <View style={{flexDirection:"row"}}>
              <Text style={s.mes}> {dia} </Text>
              <Text style={s.mes}> {mes} </Text>
            </View>
            <Feather name="check" size={19} color={Config.primaryColor.color}  />
        </View>
      </TouchableHighlight>)
  }
  if(buttonType=="not-checked"){
    return (
      <TouchableHighlight style={s.item_past} onPress={props.onPress}>
        <View style={{alignItems:'center'}}>
            <View style={{flexDirection:"row"}}>
              <Text style={s.mes}> {dia} </Text>
              <Text style={s.mes}> {mes} </Text>
            </View>
            <Text style={{color: Config.bacgroundPrimaryColor.color}}>-</Text>
        </View>
      </TouchableHighlight>)
  }
  else if(buttonType=="today"){
    return (
      <TouchableHighlight style={s.item_today} onPress={props.onPress}>
        <View>
            <Text style={s.dia}> {dia} </Text>
            <Text style={s.mes}> Hoje </Text>
        </View>
      </TouchableHighlight>)
  }else{
    return (
      <TouchableHighlight style={s.item_future} >
        <View>
            <Text style={s.dia}> {dia} </Text>
            <Text style={s.mes}> {mes} </Text>
        </View>
      </TouchableHighlight>
      )
  }
}


export default props => {
    acao = () => {
      notificar("Clicket at me")
    }
    return(
      getDayButton(props)
    )
}

export const BackButton = props => {
  acao = () => {
    const target = props.target? props.target : "Home"
    props.navigation.navigate(target)
    //BackHandler.exitApp()
  }
  return(
    <TouchableHighlight style={s.item_backButton} onPress={acao}>
        <Feather name="chevron-left" size={20} color="white"  />
    </TouchableHighlight>
  )
}

export const ConfigButton = props => {
  acao = () => {
    notificar("This is the Config button")
  }
  return(
    <TouchableHighlight style={s.item_backButton} onPress={acao}>
        <Feather name="settings" size={20} color="white"  />
    </TouchableHighlight>
  )
}

export const MenuButton = props => {
  acao = () => {
    props.navigation.openDrawer()
  }
  return(
    <TouchableHighlight style={s.item_backButton} onPress={acao}>
        <Feather name="menu" size={20} color="white"  />
    </TouchableHighlight>
  )
}

export const HorizontalButton2 = props => {
  
  return(
    <TouchableHighlight style={s.item_horizontalButton2} underlayColor='rgba(241,96,43,0.9)' onPress={props.onPress}>
        <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems:'center'}}>
          <View style={{flexDirection: 'row', alignItems:'center'}}>
            <View style={{borderRadius:15, backgroundColor:'rgba(55,58,63,1)', width: 50, height: 50, alignItems:'center', justifyContent:'center'}}>
              {props.featherIcon?
                <Feather name={props.featherIcon} size={25} color={Config.primaryColor.color}  />
                : null}
              {props.ionicon?
                <Ionicons name={props.ionicon} size={25} color={Config.primaryColor.color}  />
                : null}
              {props.materialcommunityicon?
                <MaterialCommunityIcons name={props.materialcommunityicon} size={25} color={Config.primaryColor.color}  />
                : null}
               
            </View>
            <Text style={{color:'white', fontWeight: 'bold', marginLeft:15, fontSize: 17}}>{props.text}</Text>
            <Text style={{color:'#808080', fontWeight: 'bold', marginLeft:5, fontSize: 10, marginTop: 6}}>{props.subtext}</Text>
          </View>
          {/* <Image source={require('../img/rightbutton.png')} style={{width: 15, height: 15, marginRight:10}} /> */}
          <Ionicons name="ios-arrow-forward" size={15} color="white" />
        </View>
    </TouchableHighlight>
  )
}