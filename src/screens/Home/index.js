import React, { useState } from 'react'
import {View, ScrollView } from 'react-native'
import CondictionalSection from './Sections/CondictionalSection'
import DaysSection from './Sections/DaysSection'
import HeaderSection from './Sections/HeaderSection'
import KnowledgeSection from './Sections/KnowledgeSection'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators, TransitionSpecs } from '@react-navigation/stack';
import { loadLaunchScreen } from './functions'

import { useDispatch } from 'react-redux'
import { authorizeGoogleFitAPI, saveStepOnToday } from '../../services/fitService'

import {AgeCollector, KgCollector, TallCollector, MessageScreen, GenderChooser, AcitivityFactorChooser}
  from '../CollectInfo'
import Conditional from '../Conditional'
import LaunchApp from '../../../LaunchApp'
import Food from '../Food'
import Calories from '../Calories'
import Activity from '../Activity'

import s from './styles'

const Home = (props) => {
  const [renderScreen, setRenderScreen] = useState(0)

  loadLaunchScreen(props, callback)

  const dispatch = useDispatch()

  function callback (){
    if(renderScreen == false){
      setRenderScreen(true)
      authorizeGoogleFitAPI(stepCallBack) // <- Call Google Fitness API
    }
  }

  function stepCallBack(totalStep){
    console.log("callback steps "+totalStep)
    
    saveStepOnToday(totalStep, dispatch)
  }


  return(
    <View style={s.page}>
      {renderScreen ? 
      <View style={{flex:1}}>
        <ScrollView
          showsVerticalScrollIndicator={false}>
          <HeaderSection navigation={props.navigation} />
          <DaysSection />
          <CondictionalSection navigation={props.navigation} />
          <KnowledgeSection navigation={props.navigation} />
        </ScrollView>
      </View>
      : null}
    </View>
  )
}


const Stack = createStackNavigator();

function App() {
  const ref = React.useRef(null);

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer ref={ref} independent={true}>
        <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
              transitionSpec: {
                open: 0,//TransitionSpecs.TransitionIOSSpec
                close: 0,//TransitionSpecs.TransitionIOSSpec
              },
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
              }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Atividade" component={Activity} />
          <Stack.Screen name="Calorias" component={Calories} />
          <Stack.Screen name="Comida" component={Food} />
          <Stack.Screen name="Conditional" component={Conditional} />

          <Stack.Screen name="LaunchApp" component={LaunchApp}
            options={{cardStyleInterpolator: CardStyleInterpolators.forNoAnimation}} />
          <Stack.Screen name="AgeCollector" component={AgeCollector} />
          <Stack.Screen name="KgCollector" component={KgCollector} />
          <Stack.Screen name="TallCollector" component={TallCollector} />
          <Stack.Screen name="GenderChooser" component={GenderChooser} />
          <Stack.Screen name="AcitivityFactorChooser" component={AcitivityFactorChooser} />
          <Stack.Screen name="MessageScreen" component={MessageScreen} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;