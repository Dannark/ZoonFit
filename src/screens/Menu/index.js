import React from 'react'
import { SafeAreaView, ScrollView, Text, View, ImageBackground } from 'react-native'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Animated from 'react-native-reanimated';
import Home from '../Home'
import s from './styles'
import Config from '../../Config'

import Feather from 'react-native-vector-icons/Feather';

import photo from '../../img/no-avatar.jpg'

function CustomDrawerContent({ progress, ...rest }) {
    const translateX = Animated.interpolate(progress, {
      inputRange: [0, 1],
      outputRange: [-100, 0],
    });
  
    return (
      <DrawerContentScrollView {...rest} style={s.box}>
        <View style={s.container}>
            <View style={s.userPhotoCircle}>
                <View style={s.userPhotoContainer}>
                    <ImageBackground source={photo} style={s.userPhoto} imageStyle={{borderRadius: 50}} />
                </View>
            </View>
        </View>
        <Animated.View style={{ transform: [{ translateX }] }}>
          <DrawerItemList {...rest}
            activeTintColor={Config.primaryColor.color}
            activeBackgroundColor='rgba(0, 0, 0, .08)' 
            inactiveTintColor='rgba(0, 0, 0, .87)' 
            inactiveBackgroundColor='transparent' 
            style={{backgroundColor: '#000000'}} 
            labelStyle={{color: '#ffffff'}} />
          <DrawerItem label="Help" onPress={() => alert('Link to help')} />
        </Animated.View>
      </DrawerContentScrollView>
    );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} options={{
            drawerIcon: config => 
            <Feather name="home" size={24} color='white'  />
        }} />
    </Drawer.Navigator>
  );
}

export default function App() {
    return (
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    );
}