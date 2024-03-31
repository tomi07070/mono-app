import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../../Views/Settings.js';
import NavigationStacks from './Stacks.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AllExercises from '../../Views/AllExercises.js';
import PreMadeRoutines from '../../Views/PreMadeRoutines.js';

export default function NavigationTab() {
  const Tab = createBottomTabNavigator();
  return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Exercises') {
                iconName = 'dumbbell' }
                else if (route.name === 'Routines') {
                  iconName = focused ? 'arm-flex' : 'arm-flex-outline';
                }
              else if (route.name === 'settings') {
                iconName = focused ? 'cog' : 'cog-outline';
              }

              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'orange',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen
            options={{
              headerShown: false,
            }} 
            name='Home' 
            component={NavigationStacks}
          />
          <Tab.Screen
            options={{
              headerShown: false,
            }}
            name='Exercises' 
            component={AllExercises}
          />
          <Tab.Screen
            name='Routines' 
            component={PreMadeRoutines}
          />
          <Tab.Screen
            name='settings' 
            component={Settings}
          />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

