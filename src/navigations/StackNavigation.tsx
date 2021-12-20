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
    <RootStack.Navigator>
      <RootStack.Screen name="Page1Screen" component={Page1Screen} />
      <RootStack.Screen name="Page2Screen" component={Page2Screen} />
      <RootStack.Screen name="Page3Screen" component={Page3Screen} />
    </RootStack.Navigator>
  );
};

export default StackNavigation;
