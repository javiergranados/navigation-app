import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import ContactsScreen from '../screens/ContactsScreen';
import AlbumsScreen from '../screens/AlbumsScreen';

export type TabsParamList = {
  ChatScreen: undefined;
  ContactsScreen: undefined;
  AlbumsScreen: undefined;
};

const Tab = createMaterialTopTabNavigator<TabsParamList>();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ChatScreen" options={{ title: 'Chat' }} component={ChatScreen} />
      <Tab.Screen name="ContactsScreen" options={{ title: 'Contacts' }} component={ContactsScreen} />
      <Tab.Screen name="AlbumsScreen" options={{ title: 'Albums' }} component={AlbumsScreen} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
