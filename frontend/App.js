import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectRoutine from './src/Views/SelectRoutine.js';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import Hombro from './src/Views/Muscles/Hombro.js';


export default function App() {
  const Stack = createNativeStackNavigator()
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Select Muscle" component={SelectRoutine} />
          <Stack.Screen name="Hombro" component={Hombro} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


