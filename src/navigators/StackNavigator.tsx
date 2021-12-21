import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Page1Screen from '../screens/Page1Screen';
import Page2Screen from '../screens/Page2Screen';
import Page3Screen from '../screens/Page3Screen';
import PersonScreen from '../screens/PersonScreen';

export type RootStackParamList = {
  Page1Screen: undefined;
  Page2Screen: undefined;
  Page3Screen: undefined;
  PersonScreen: { id: number; name: string };
};

const RootStack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <RootStack.Screen name="Page1Screen" options={{ title: 'Page 1' }} component={Page1Screen} />
      <RootStack.Screen name="Page2Screen" options={{ title: 'Page 2' }} component={Page2Screen} />
      <RootStack.Screen name="Page3Screen" options={{ title: 'Page 3' }} component={Page3Screen} />
      <RootStack.Screen name="PersonScreen" component={PersonScreen} />
    </RootStack.Navigator>
  );
};

export default StackNavigator;
