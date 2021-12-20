import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar } from 'react-native';
import NavigationScreen from './src/screens/NavigationScreen';
import { appStyles } from './src/theme/appTheme';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={appStyles.background}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <NavigationScreen />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
