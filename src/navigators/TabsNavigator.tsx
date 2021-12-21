import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../theme/appTheme';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import StackNavigator from './StackNavigator';

export type TabsParamList = {
  Tab1Screen: undefined;
  Tab2Screen: undefined;
  StackNavigator: undefined;
};

const Tab = createBottomTabNavigator<TabsParamList>();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
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
      <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1', headerShown: false }} component={Tab1Screen} />
      <Tab.Screen name="Tab2Screen" options={{ title: 'Tab2', headerShown: false }} component={Tab2Screen} />
      <Tab.Screen name="StackNavigator" options={{ title: 'Stack', headerShown: false }} component={StackNavigator} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
