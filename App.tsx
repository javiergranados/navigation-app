import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthContext';
// import StackNavigator from './src/navigators/StackNavigator';
// import OldDrawerNavigator from './src/navigators/OldDrawerNavigator';
import DrawerNavigator from './src/navigators/DrawerNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator /> */}
        {/* <OldDrawerNavigator /> */}
        <DrawerNavigator />
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({ children }: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
