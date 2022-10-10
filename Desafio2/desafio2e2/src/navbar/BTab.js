import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PelisScreen from '../screens/PelisScreen';
import SeriesScreen from '../screens/SeriesScreen';
import ProxScreen from '../screens/ProxScreen';

const Tab = createBottomTabNavigator();

export default function BTab() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Peliculas" component={PelisScreen} />
        <Tab.Screen name="Series" component={SeriesScreen} />
         <Tab.Screen name="Proximamente" component={ProxScreen} />
      </Tab.Navigator>
  );
}