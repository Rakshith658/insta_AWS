import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyTabs from './src/screens/Navigation';
import HomeStackScreen from './src/screens/HomeScreen';
import { AntDesign,FontAwesome5,Feather,MaterialIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StoryScreen from './src/screens/StoryScreen';
import StoryStackScreen from './src/screens/StoryScreen';


import { withAuthenticator } from 'aws-amplify-react-native'
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App=()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={MyTabs}/>
        <Stack.Screen name="Story"component={StoryStackScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default withAuthenticator(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:25
  },
});
