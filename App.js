import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from './home';
import settings from './setting';
import { MaterialCommunityIcons } from '@expo/vector-icons';



// Bottom nativator start point of the App..
const Tab = createMaterialBottomTabNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Tab.Navigator  screenOptions={{headerShown: true}} 
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#C0C0C0"
        barStyle={{ backgroundColor: '#353535' }}
      >
        {/* home page */} 
        <Tab.Screen name='Home' component={Home} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="home" color = "#fff" size={26} />
            ),
        }}/>

        {/* settings page */}
        <Tab.Screen name='Options' component={settings}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="cog-outline" color = "#fff" size={26} />
            ),
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  )
}




