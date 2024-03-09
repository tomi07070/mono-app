import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Settings  from '../../Views/Settings.js';
import NavigationStacks from './Stacks.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function NavigationTab() {
  const Tab = createBottomTabNavigator()
  return (
      <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen options={{
            headerShown: false,
            tabBarIcon: ({color , size}) => {
              <MaterialCommunityIcons name="home" size={size} color={color} />
            }

          }} name='Home' component={NavigationStacks}/>
          <Tab.Screen options={{
            tabBarIcon: () => {
              <MaterialCommunityIcons name="cog" size={24} color="black" />
            },
          }} name='settings' component={Settings}/>
        </Tab.Navigator>
      </NavigationContainer>
       
      </>
  );
}
