import React from 'react'
import {Text, View, StyleSheet, ImageBackground, AsyncStorage} from 'react-native'
import ButtonGradient from './src/components/Buttons/ButtonGradient'
import Config from './src/Config'
import * as Animatable from 'react-native-animatable';

const back = require("./src/img/LauncherApp2.png")
const icon = require("./src/img/icon.png")

export default class LaunchApp extends React.Component{
  render(){
    return(
      <ImageBackground source={back} style={s.container}>

        <View style={s.textContainer}>
          <Animatable.Image animation="slideInDown" delay={150} source={icon} style={s.icon} />
          <Animatable.Text animation="slideInDown" iterationCount={1} direction="alternate" style={s.text1}
            delay={150}>
            Train with
          </Animatable.Text>
          <Animatable.Text animation="slideInDown" iterationCount={1} direction="alternate" style={s.text2}
            delay={100}>
            THE BEST{"\n"}
            DIGITAL COACH 
          </Animatable.Text>
          
          <Animatable.Text animation="slideInDown" iterationCount={1} direction="alternate" style={s.text3}
            delay={50}>
            {"\n"}
            Dare to be free with the{"\n"}
            Freeletics Al Coach. Only{"\n"}
            on the Freelics App.
          </Animatable.Text>
          
        </View>
        {/* flipInX | bounceInLeft */}
        <Animatable.View animation="flipInX" style={s.bigButton} delay={1000} >
          <ButtonGradient title="Encontre a sua Jornada" width={250} 
             onPress={() => goToAppHomeScreen(this.props)} />
        </Animatable.View>
      </ImageBackground>
    )
  }
}

function goToAppHomeScreen(props){
  //props.navigation.navigate("Home")
  props.navigation.navigate("AgeCollector")
}



const s = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:Config.bacgroundPrimaryColor.color,
    justifyContent: 'center'
  },
  bigButton:{
    position: 'absolute',
    bottom: 50,
    left: 30
  },

  textContainer:{
    marginLeft: 15
  }, 
  icon:{
    width: 45,
    height: 45
  },
  text1:{
    color: 'white',
    fontSize: 28,
  },
  text2:{
    color: 'white',
    fontSize: 38,
    fontWeight: 'bold'
  },
  text3:{
    color: 'white',
    fontSize: 19,
  },
})