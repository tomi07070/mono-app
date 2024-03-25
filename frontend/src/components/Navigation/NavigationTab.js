import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../../Views/Settings.js';
import NavigationStacks from './Stacks.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
              } else if (route.name === 'settings') {
                iconName = focused ? 'cog' : 'cog-outline';
              }

              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
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
            name='settings' 
            component={Settings}
          />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

