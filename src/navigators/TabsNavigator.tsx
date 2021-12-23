import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { colors } from '../theme/appTheme';
import Tab1Screen from '../screens/Tab1Screen';
import TopTabNavigator from './TopTabsNavigator';
import StackNavigator from './StackNavigator';
import { Platform } from 'react-native';

export type TabsParamList = {
  Tab1Screen: undefined;
  TopTabNavigator: undefined;
  StackNavigator: undefined;
};

const createTabBarIcon = (name: string, size: number, color: string) => <Icon name={name} size={size} color={color} />;

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
      <TabIOS.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
          headerShown: false,
          tabBarIcon: ({ color, size }) => createTabBarIcon('bandage-outline', size, color),
        }}
        component={Tab1Screen}
      />
      <TabIOS.Screen
        name="TopTabNavigator"
        options={{
          title: 'Tab2',
          headerShown: false,
          tabBarIcon: ({ color, size }) => createTabBarIcon('basketball-outline', size, color),
        }}
        component={TopTabNavigator}
      />
      <TabIOS.Screen
        name="StackNavigator"
        options={{
          title: 'Stack',
          headerShown: false,
          tabBarIcon: ({ color, size }) => createTabBarIcon('bookmarks-outline', size, color),
        }}
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
      <TabMaterial.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
          tabBarIcon: ({ color }) => createTabBarIcon('bandage-outline', 20, color),
        }}
        component={Tab1Screen}
      />
      <TabMaterial.Screen
        name="TopTabNavigator"
        options={{ title: 'Tab2', tabBarIcon: ({ color }) => createTabBarIcon('basketball-outline', 20, color) }}
        component={TopTabNavigator}
      />
      <TabMaterial.Screen
        name="StackNavigator"
        options={{ title: 'Stack', tabBarIcon: ({ color }) => createTabBarIcon('bookmarks-outline', 20, color) }}
        component={StackNavigator}
      />
    </TabMaterial.Navigator>
  );
};

const TabsNavigator = () => {
  return Platform.OS === 'ios' ? <TabsIOSNavigator /> : <TabsMaterialNavigator />;
};

export default TabsNavigator;
