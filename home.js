import React from 'react';
import {View, Text} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {styles} from './Styles';


class App extends React.Component {
    state = {
    }
  
    render() {
  
      return (
        <View style={styles.container}> 
          <Text style={styles.biggerText}> Hello World this is home page !!!</Text>
        </View>
      )
    }
}



const Homestack = createNativeStackNavigator();
export default function Home( {navigation} ) {
  return (
    <View style={{flex: 1}} collapsable={false}>
      <Homestack.Navigator >
        <Homestack.Screen  name='FarmMonitor' component={App} 
        //   options={{
        //     headerRight: () => (
        //       <TouchableOpacity 
        //         onPress={() => navigation.navigate('AddContact')}
        //       >
        //         <Text style={styles.headerButton}> Add Contact </Text>
        //       </TouchableOpacity>
        //     ),
        //   }}
        />
      </Homestack.Navigator>
    </View>
  );
}



