import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import StackNavigator from './StackNavigator';

export type BottomTabParamList = {
  Tab1Screen: undefined;
  Tab2Screen: undefined;
  StackNavigator: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Tab1Screen" options={{ headerShown: false }} component={Tab1Screen} />
      <BottomTab.Screen name="Tab2Screen" options={{ headerShown: false }} component={Tab2Screen} />
      <BottomTab.Screen name="StackNavigator" options={{ headerShown: false }} component={StackNavigator} />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
