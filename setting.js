import React from 'react';
import {View, Text} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {styles} from './Styles';

class SettingPage extends React.Component {
    state = {
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.biggerText}> This is Settings page !!! </Text>
            </View>
        )
    }
}


const Settingstack = createNativeStackNavigator();
export default function Setting() {
  return (
    <View style={{flex: 1}} collapsable={false}>
        <Settingstack.Navigator >
            <Settingstack.Screen  name='Settings' component={SettingPage}/>
        </Settingstack.Navigator>
    </View>
  );
}



