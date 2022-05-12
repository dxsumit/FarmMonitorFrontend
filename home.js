import React from 'react';
import {View, Text, Pressable, ImageBackground} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {styles} from './Styles';
import Cards from './card';
import Temperature from './temperature';
import Humidity from './humidity'
import AnalysisPage from './analysis'
import Moisture from './moisture';
import i18n from './languages/i18n';

// hook
import { useTranslation } from 'react-i18next';
import { Button } from 'react-native-paper';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const image = { uri: "https://picsum.photos/id/112/800/800" };

const App = (props) => {
  
      const {t, i18n} = useTranslation();
      const temperature = { Text1: t('Air Temperature'), Text2: t('Press for Information') };   
      const humidity = { Text1: t('Air Humidity'), Text2: t('Press for Information') };
      const soil = { Text1: t('Soil Moisture'), Text2: t('Press for Information') };
      const analysis = { Text1: t('Data Analysis'), Text2: t('Press for Information') };

      return (
        
        <View style={styles.cardOuterContainer}> 

          <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        
            <View style={styles.btnContainer}>

              <Pressable style={styles.button}
                onPress =  { () => {
                  i18n.changeLanguage('en');
                }} >

                <Text style={[styles.betterText, { fontSize: 14, color: '#fff'}]} > English </Text>
              </Pressable>

              <Pressable style={styles.button} onPress =  { () => {
                  i18n.changeLanguage('hn');
                }} >
                <Text style={[styles.betterText, { fontSize: 14, color: '#fff'}]}> हिन्दी </Text>
              </Pressable>

              <Pressable style={styles.button} onPress =  { () => {
                  i18n.changeLanguage('tm');
                }}>
                <Text style={[styles.betterText, { fontSize: 14, color: '#fff'}]}> தமிழ் </Text>
              </Pressable>

              <Text style={[styles.betterText, {color:'#fff', fontWeight: 'bold'}]}> {t('welcome')} </Text>

            </View>


            <View style={styles.cardContainer}> 
              {/* need to pass naviagtions in-order to use navigations in other component */}
              <Cards content = {temperature} navigation={props.navigation} lang={t}/>
              <Cards content = {humidity} navigation={props.navigation}/>
              <Cards content = {soil} navigation={props.navigation}/>
              <Cards content = {analysis} navigation={props.navigation}/>
            </View>

          </ImageBackground>
        </View>

      )
}


export const Homestack = createNativeStackNavigator();
export default function Home( {navigation} ) {
  
  return (
    <View style={{flex: 1}} collapsable={false} >
      <Homestack.Navigator screenOptions={{
          headerTransparent: true,
        }}
      >
        <Homestack.Screen  name='FarmMonitor' component={App} />
        <Homestack.Screen  name='Temperature Data' component={Temperature}/>
        <Homestack.Screen  name='Humidity Data' component={Humidity} />
        <Homestack.Screen  name='Analysis' component={AnalysisPage} />
        <Homestack.Screen  name='Soil Moisture' component={Moisture} />
      </Homestack.Navigator>
    </View>
  );
}



