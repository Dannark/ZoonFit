import React from 'react'
import AgeCollectorScreen from './Components/Collector'
import KgCollectorScreen from './Components/Collector'
import TallCollectorScreen from './Components/Collector'
import ChooserScreen from './Components/Chooser'
import Message from './Components/Message'

import AsyncStorage from '@react-native-community/async-storage';

var user = {
    kg: 0,
    tall: 0,
    age: 0,
    gender: 0,
    activity: 0
}

export const AgeCollector = props => {
    return(
        <>
            <AgeCollectorScreen title="Qual a sua idade?" value={0} placeholder={"25"}
                    navigation={props.navigation} callback={(response) => ageResponse(response, props)} />
        </>
    )
}
export const KgCollector = props => {
    return(
        <>
            <KgCollectorScreen title="Qual o seu peso?" value={0} placeholder={"kg"}
                    navigation={props.navigation} callback={(response) => kgResponse(response, props)} />
        </>
    )
}    
export const TallCollector = props => {
    return(
        <>
            <TallCollectorScreen title="Qual a sua altura (cm)?" value={0} placeholder={"165"}
                    navigation={props.navigation} callback={(response) => tallResponse(response, props)} />
        </>
    )
}    
export const GenderChooser = props => {
    return(
        <>
            <ChooserScreen title="Qual seu gênero?" options={["Masculino", "Feminino"]}
                callback={(selectedValue) => genderChooserResponse(selectedValue, props)} />
        </>
    )
}
export const AcitivityFactorChooser = props => {
    return(
        <>
            <ChooserScreen title="Qual o seu nível de atividade?" 
                options={[
                    "Sedentário (pouco ou nenhum exercício)",
                    "Levemente ativo (exercício leve 1 a 3 dias por semana)",
                    "Moderadamente ativo (pratica esportes 3 a 5 dias por semana)",
                    "Muito ativo (exercícios intensos de 5 a 6 dias por semana)",
                    "Extremamente ativo (exercícios intensos diariamente ou até 2 vezes por dia)"
                ]}
                callback={(selectedValue) => activityChooserResponse(selectedValue, props)} />
        </>
    )
}
export const MessageScreen = props => {
    console.log("user.gender="+user.gender)
    var user_tmb = calcManTMB()
    if(user.gender== 1){ //0 == Male, 1 == Female
        user_tmb = calcWomanTMB()
    }

    if(user.activity == 0){
        user_tmb *= 1.2
    }else if(user.activity == 1){
        user_tmb *= 1.375
    }else if(user.activity == 2){
        user_tmb *= 1.55
    }else if(user.activity == 3){
        user_tmb *= 1.725
    }else if(user.activity == 4){
        user_tmb *= 1.9
    }

    user_tmb = parseInt(user_tmb)

    return(
        <>
            <Message TMB={user_tmb} callback={() => messageResponse(props)} />
        </>
    )
}    

function ageResponse(age, props){
    user.age = age
    props.navigation.navigate("KgCollector")
}

function kgResponse(kg, props){
    user.kg = kg
    props.navigation.navigate("TallCollector")
}
function tallResponse(tall, props){
    user.tall = tall
    props.navigation.navigate("GenderChooser")
}
function genderChooserResponse(selectedValue, props){
    user.gender = selectedValue
    props.navigation.navigate("AcitivityFactorChooser")
}
function activityChooserResponse(selectedValue, props){
    user.activity = selectedValue
    props.navigation.navigate("MessageScreen")
}
function messageResponse(props){
    storeData("firstlaunch", 'false')//DISABLE LAUNCH SCREEN
    props.navigation.navigate("Home")
}


function calcManTMB(){
    return ((13.75 * user.kg) + (5 * user.tall) - (6.76 * user.age) + 66.5)
}

function calcWomanTMB(){
    return ((9.56 * user.kg) + (1.85 * user.tall) - (4.68 * user.age) + 665)
}

async function storeData(key, value){
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        console.log("can't save the store data")
    }
}