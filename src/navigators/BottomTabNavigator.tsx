import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';

export type BottomTabParamList = {
  StackNavigator: undefined;
  SettingsScreen: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="StackNavigator" component={StackNavigator} />
      <BottomTab.Screen name="SettingsScreen" component={SettingsScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
