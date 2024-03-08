import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectRoutine from './src/Views/SelectRoutine.js';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import Hombro from './src/Views/Muscles/Hombro.js';
import Bicep from './src/Views/Muscles/Bicep.js'
import antebrazo from './src/Views/Muscles/antebrazo.js'
import cuads from './src/Views/Muscles/cuads.js'
import Pecho from './src/Views/Muscles/Pecho.js'
import abs from './src/Views/Muscles/abs.js'
import Soleo from './src/Views/Muscles/Soleo.js'
import Triceps from './src/Views/Muscles/Triceps.js'
import Espalda from './src/Views/Muscles/Espalda.js'
import Femoral from './src/Views/Muscles/Femoral.js'
import Gluteo from './src/Views/Muscles/Gluteo.js'
import Gemelo from './src/Views/Muscles/Gemelo.js'

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{
            headerShown: false
          }} name="Select Muscle" component={SelectRoutine} />
          <Stack.Screen name="HOMBRO" component={Hombro} />
          <Stack.Screen name='BICEPS' component={Bicep} />
          <Stack.Screen name='ANTE BRAZO' component={antebrazo}/>
          <Stack.Screen name='CUADRICEPS' component={cuads}/>
          <Stack.Screen name='PECHO' component={Pecho}/>
          <Stack.Screen name='ABS' component={abs}/>
          <Stack.Screen name='SOLEO' component={Soleo}/>
          <Stack.Screen name='TRICEPS' component={Triceps}/>
          <Stack.Screen name='ESPALDA' component={Espalda}/>
          <Stack.Screen name='FEMORALES' component={Femoral}/>
          <Stack.Screen name='GLUTEO' component={Gluteo}/>
          <Stack.Screen name='GEMELO' component={Gemelo}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}


