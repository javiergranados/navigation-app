import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { colors } from '../theme/appTheme';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import StackNavigator from './StackNavigator';
import { Platform } from 'react-native';

export type TabsParamList = {
  Tab1Screen: undefined;
  Tab2Screen: undefined;
  StackNavigator: undefined;
};

const TabIOS = createBottomTabNavigator<TabsParamList>();
const TabsIOSNavigator = () => {
  return (
    <TabIOS.Navigator
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
      <TabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1', headerShown: false }} component={Tab1Screen} />
      <TabIOS.Screen name="Tab2Screen" options={{ title: 'Tab2', headerShown: false }} component={Tab2Screen} />
      <TabIOS.Screen
        name="StackNavigator"
        options={{ title: 'Stack', headerShown: false }}
        component={StackNavigator}
      />
    </TabIOS.Navigator>
  );
};

const TabMaterial = createMaterialBottomTabNavigator();
const TabsMaterialNavigator = () => {
  return (
    <TabMaterial.Navigator
      sceneAnimationEnabled
      barStyle={{
        backgroundColor: colors.primary,
      }}
    >
      <TabMaterial.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
      <TabMaterial.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={Tab2Screen} />
      <TabMaterial.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
    </TabMaterial.Navigator>
  );
};

const TabsNavigator = () => {
  return Platform.OS === 'ios' ? <TabsIOSNavigator /> : <TabsMaterialNavigator />;
};

export default TabsNavigator;
