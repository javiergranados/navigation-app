import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import ContactsScreen from '../screens/ContactsScreen';
import AlbumsScreen from '../screens/AlbumsScreen';
import { colors } from '../theme/appTheme';

export type TabsParamList = {
  ChatScreen: undefined;
  ContactsScreen: undefined;
  AlbumsScreen: undefined;
};

const Tab = createMaterialTopTabNavigator<TabsParamList>();

const TopTabNavigator = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{ paddingTop: insets.top }}
      sceneContainerStyle={{ backgroundColor: 'white' }}
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarPressColor: colors.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
        tabBarStyle: {
          shadowColor: 'transparent',
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="ChatScreen"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color }) => <Icon name="chatbox-ellipses-outline" size={20} color={color} />,
        }}
        component={ChatScreen}
      />
      <Tab.Screen
        name="ContactsScreen"
        options={{
          title: 'Contacts',
          tabBarIcon: ({ color }) => <Icon name="people-outline" size={20} color={color} />,
        }}
        component={ContactsScreen}
      />
      <Tab.Screen
        name="AlbumsScreen"
        options={{
          title: 'Albums',
          tabBarIcon: ({ color }) => <Icon name="albums-outline" size={20} color={color} />,
        }}
        component={AlbumsScreen}
      />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
