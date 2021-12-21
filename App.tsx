import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import StackNavigator from './src/navigators/StackNavigator';
// import DrawerNavigator from './src/navigators/DrawerNavigator';
import PersonalizedDrawerNavigator from './src/navigators/PersonalizedDrawerNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <DrawerNavigator /> */}
      <PersonalizedDrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
