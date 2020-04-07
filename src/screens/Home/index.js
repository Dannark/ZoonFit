import React, {Component} from 'react'
import {Text, View, StyleSheet, ScrollView, YellowBox} from 'react-native'
import Buttons, {HorizontalButton, HorizontalButton2, ConfigButton} from '../../components/Buttons'
import GreetingSection from '../../components/Sections/ActivitySection'
import DaysSection from '../../components/Sections/DaysSection'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Activity from '../Activity'
import Status from '../Status'

import s from './styles'

class Home extends Component{
  
  render(){
    return(
      <View style={s.page}>
        <View style={{flex:1}}>
        <ScrollView>
          <View style={s.header}>
            <View>
              <Text style={s.small_title}>Your Activity</Text>
              <Text style={s.sub_title}>You are very Active!</Text>
            </View>
            <ConfigButton></ConfigButton>
          </View>

          <DaysSection />
          <GreetingSection></GreetingSection>
          
          <Text style={s.texttag}>CONHECIMENTO</Text>
          <HorizontalButton2 featherIcon={"droplet"} text={"Copos de água"} subtext={"1 min atrás"} />
          <HorizontalButton2 ionicon={"md-pizza"} text={"Calorias"} subtext={"25 min atrás"} 
            onPress={() => this.props.navigation.navigate("Status")}/>
          <HorizontalButton2 featherIcon={"activity"} text={"Atividades"} subtext={"2 min atrás"} 
            onPress={() => this.props.navigation.navigate("Atividade")}/>
          
          
        </ScrollView>
        </View>
      </View>
    )
  }
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
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
              }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Atividade" component={Activity} />
          <Stack.Screen name="Status" component={Status} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;