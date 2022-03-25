import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from './home';
import settings from './setting';



const Tab = createMaterialBottomTabNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: true}} initialRouteName="Home">
        {/* home page */}
        <Tab.Screen name='Home' component={Home}/>

        {/* settings page */}
        <Tab.Screen name='Options' component={settings}/>

      </Tab.Navigator>
    </NavigationContainer>
  )
}




