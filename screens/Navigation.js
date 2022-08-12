import HomeScreen from './HomeScreen'
import Poster from './Poster'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const stack = createStackNavigator()
const screenOptions = {
  headerShown:false
}

const SigneImScreens = () =>
(
  <NavigationContainer>
    <stack.Navigator initialRouteName='HomeScreen' screenOptions={screenOptions}>
      <stack.Screen name='HomeScreen' component={HomeScreen}/>
      <stack.Screen name='Poster' component={Poster}/>
    </stack.Navigator>
  </NavigationContainer>

)

export default SigneImScreens