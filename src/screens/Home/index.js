import React, { Component } from 'react'
import {Text, View, ScrollView } from 'react-native'
import {HorizontalButton2, ConfigButton} from '../../components/Buttons'
import CondictionalSection from '../../components/Sections/CondictionalSection'
import DaysSection from '../../components/Sections/DaysSection'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators, TransitionSpecs } from '@react-navigation/stack';
import { loadLaunchScreen } from './functions'

import Activity from '../Activity'
import Status from '../Status'
import LaunchApp from '../../../LaunchApp'

import s from './styles'

class Home extends Component{
  
  constructor(props) {
    super(props);

    this.state = { renderScreen:false }
    loadLaunchScreen(props, this.callback)
    
  }

  callback = () =>{
    this.setState({renderScreen:true})
  }

  render(){
    return(
      <View style={s.page}>
        {this.state.renderScreen ? 
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
          <CondictionalSection navigation={this.props.navigation} />
          
          <Text style={s.texttag}>CONHECIMENTO</Text>
          <HorizontalButton2 featherIcon={"droplet"} text={"Copos de água"} subtext={"1 min atrás"} />
          <HorizontalButton2 ionicon={"md-pizza"} text={"Calorias"} subtext={"25 min atrás"} 
            onPress={() => this.props.navigation.navigate("Status")}/>
          <HorizontalButton2 featherIcon={"activity"} text={"Atividades"} subtext={"2 min atrás"} 
            onPress={() => this.props.navigation.navigate("Atividade")}/>
          
          
        </ScrollView>
        </View>
        : null}
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
              transitionSpec: {
                open: 0,//TransitionSpecs.TransitionIOSSpec
                close: 0,//TransitionSpecs.TransitionIOSSpec
              },
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
              }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Atividade" component={Activity} />
          <Stack.Screen name="Status" component={Status} />
          <Stack.Screen name="LaunchApp" component={LaunchApp}
            options={{cardStyleInterpolator: CardStyleInterpolators.forNoAnimation}} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;