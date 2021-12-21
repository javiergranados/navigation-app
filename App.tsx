import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import StackNavigator from './src/navigators/StackNavigator';
// import OldDrawerNavigator from './src/navigators/OldDrawerNavigator';
import DrawerNavigator from './src/navigators/DrawerNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <OldDrawerNavigator /> */}
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
