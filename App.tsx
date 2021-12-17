import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import NavigationScreen from './src/screens/NavigationScreen';
import { appStyles } from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={appStyles.background}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <NavigationScreen />
    </SafeAreaView>
  );
};

export default App;
