import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Page1Screen from '../screens/Page1Screen';
import Page2Screen from '../screens/Page2Screen';
import Page3Screen from '../screens/Page3Screen';

export type RootStackParamList = {
  Page1Screen: undefined;
  Page2Screen: undefined;
  Page3Screen: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const StackNavigation = () => {
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
    </RootStack.Navigator>
  );
};

export default StackNavigation;