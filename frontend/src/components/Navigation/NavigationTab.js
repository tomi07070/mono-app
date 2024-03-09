import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Settings  from '../../Views/Settings.js';
import NavigationStacks from './Stacks.js';

export default function NavigationTab() {
  const Tab = createBottomTabNavigator()
  return (
      <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen options={{
            headerShown: false
          }} name='Home' component={NavigationStacks}/>
          <Tab.Screen name='settings' component={Settings}/>
        </Tab.Navigator>
      </NavigationContainer>
       
      </>
  );
}
