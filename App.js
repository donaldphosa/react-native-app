import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SigneImScreens from './screens/Navigation';
import 'react-native-gesture-handler';


export default function App() {

  return (
    <SafeAreaProvider>
       <SigneImScreens/>
    </SafeAreaProvider>
  );
}