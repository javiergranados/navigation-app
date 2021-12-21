import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import StackNavigator from './StackNavigator';
import { colors } from '../theme/appTheme';

export type BottomTabParamList = {
  Tab1Screen: undefined;
  Tab2Screen: undefined;
  StackNavigator: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
      }}
    >
      <BottomTab.Screen name="Tab1Screen" options={{ title: 'Tab1', headerShown: false }} component={Tab1Screen} />
      <BottomTab.Screen name="Tab2Screen" options={{ title: 'Tab2', headerShown: false }} component={Tab2Screen} />
      <BottomTab.Screen
        name="StackNavigator"
        options={{ title: 'Stack', headerShown: false }}
        component={StackNavigator}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
