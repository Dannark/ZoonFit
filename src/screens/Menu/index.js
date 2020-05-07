import React from 'react'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Animated from 'react-native-reanimated';
import s from './styles'
import Profile from './Sections/Profile'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from '../../store'

import Home from '../Home'
import Feed from '../Feed'
import User from '../User'
import Settings from '../Settings'

import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function CustomDrawerContent({ progress, ...rest }) {
    const translateX = Animated.interpolate(progress, {
      inputRange: [0, 1],
      outputRange: [-100, 0],
    });
  
    return (
      <DrawerContentScrollView {...rest} style={s.box} >
        
        <Profile />

        <Animated.View style={{ transform: [{ translateX }] }}>
          <DrawerItemList {...rest}
            activeTintColor= 'white'
            activeBackgroundColor= 'rgba(0, 0, 0, .17)' //{Config.primaryColor.color}
            inactiveTintColor='rgba(255,255,255,0.4)' 
            inactiveBackgroundColor='transparent' 
            style={{backgroundColor: '#000000', color: 'blue'}} 
            />

          {/* <DrawerItem label="Help" onPress={() => alert('Link to help')} /> */}
        </Animated.View>
      </DrawerContentScrollView>
    );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} 
        options={{
            drawerIcon: config => 
            <Octicons name="home" size={24} color={config.color}  />
        }} />
        
        <Drawer.Screen name="Feed" component={Feed} 
          options={{
            drawerIcon: config => 
            <MaterialCommunityIcons name="newspaper" size={24} color={config.color}  />
        }} />
        
        <Drawer.Screen name="Usuário" component={User} 
          options={{
            drawerIcon: config => 
            <Feather name="user" size={24} color={config.color}  />
        }} />
        
        <Drawer.Screen name="Configurações" component={Settings} 
          options={{
            drawerIcon: config => 
            <Octicons name="settings" size={24} color={config.color}  />
        }} />
        
    </Drawer.Navigator>
  );
}

export default function App() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer independent={true}>
            <MyDrawer />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
}