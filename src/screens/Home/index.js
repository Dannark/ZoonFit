import React, { Component } from 'react'
import {View, ScrollView } from 'react-native'
import CondictionalSection from './Sections/CondictionalSection'
import DaysSection from './Sections/DaysSection'
import HeaderSection from './Sections/HeaderSection'
import KnowledgeSection from './Sections/KnowledgeSection'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators, TransitionSpecs } from '@react-navigation/stack';
import { loadLaunchScreen } from './functions'
import { Provider } from 'react-redux'
import store from '../../store'

import {AgeCollector, KgCollector, TallCollector, MessageScreen, GenderChooser, AcitivityFactorChooser}
  from '../CollectInfo'
import Conditional from '../Conditional'
import LaunchApp from '../../../LaunchApp'
import Food from '../Food'
import Calories from '../Calories'
import Activity from '../Activity'

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
      <Provider store={store}>
        <View style={s.page}>
          {this.state.renderScreen ? 
          <View style={{flex:1}}>
            <ScrollView>
              <HeaderSection navigation={this.props.navigation} />
              <DaysSection />
              <CondictionalSection navigation={this.props.navigation} />
              <KnowledgeSection navigation={this.props.navigation} />
            </ScrollView>
          </View>
          : null}
        </View>
      </Provider>
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