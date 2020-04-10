import React from 'react'
import {View, Text, ScrollView, ImageBackground} from 'react-native'

import s from './styles'
import { BackButton } from '../../components/Buttons'
import CheckButton from '../../components/Buttons/CheckButton'

const cardImg = {uri: 'https://life.spartan.com/wp-content/uploads/2016/10/dynamic-warmup.jpg'}
const exampleImg1 = {uri: 'https://abrilexame.files.wordpress.com/2020/03/appsexercicios.jpg'}
const exampleImg2 = {uri: 'https://www.ibahia.com/fileadmin/user_upload/ibahia/2020/marco/30/treino1.jpg'}
const exampleImg3 = {uri: 'https://www.rbsdirect.com.br/imagesrc/24857108.jpg?w=700'}
const exampleImg4 = {uri: 'https://areademulher.r7.com/wp-content/uploads/2019/12/exercicios-em-casa-quais-fazer-e-cuidados-para-ser-tomados-2.jpg'}

export default props =>{

  return(
    <View style={s.container}>
      <ScrollView>
        <View style={s.header}>
          <BackButton navigation={props.navigation}></BackButton>
          <View>
            <Text style={s.small_title}>Conditional</Text>
            <Text style={s.sub_title}>11 | 14 No Equipment</Text>
          </View>
        </View>

        <ImageBackground source={cardImg} style={s.cardImg} imageStyle={{borderRadius: 15}} />

        <CheckButton id={1} text={"Exercício 1"} subtext={"01:35"} onPress={() => onClick(1)} checked />
        <CheckButton id={2} text={"Exercício 2"} subtext={"02:10"} onPress={() => onClick(2)} checked />
        <CheckButton id={3} text={"Exercício 3"} subtext={"09:50"} onPress={() => onClick(3)} current />
        <CheckButton id={4} text={"Exercício 4"} subtext={"2 min"} onPress={() => onClick(4)}  />

        <Text style={s.texttag}>SUGERIDO</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginHorizontal: 0}}>
          <ImageBackground source={exampleImg1} style={s.miniCardImg} imageStyle={{borderRadius: 15}} />
          <ImageBackground source={exampleImg2} style={s.miniCardImg} imageStyle={{borderRadius: 15}} />
          <ImageBackground source={exampleImg3} style={s.miniCardImg} imageStyle={{borderRadius: 15}} />
          <ImageBackground source={exampleImg4} style={s.miniCardImg} imageStyle={{borderRadius: 15}} />
        </ScrollView>
      </ScrollView>
    </View>
  )
}

function onClick(id){
  console.log("button Clicked id: "+id)
}