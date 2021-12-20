import React from 'react';
import { appStyles } from '../theme/appTheme';
import { Text, View, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigations/StackNavigation';

interface Page1ScreenProps extends StackScreenProps<RootStackParamList, 'Page1Screen'> {}

const Page1Screen = ({ navigation }: Page1ScreenProps) => {
  return (
    <View style={appStyles.globalMargin}>
      <Text style={appStyles.title}>Page 1 screen</Text>
      <Button title="Go to Screen 2" onPress={() => navigation.navigate('Page2Screen')} />
    </View>
  );
};

export default Page1Screen;
