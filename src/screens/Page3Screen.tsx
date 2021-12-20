import React from 'react';
import { appStyles } from '../theme/appTheme';
import { Text, View, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigations/StackNavigation';

interface Page3ScreenProps extends StackScreenProps<RootStackParamList, 'Page3Screen'> {}

const Page3Screen = ({ navigation }: Page3ScreenProps) => {
  return (
    <View style={appStyles.globalMargin}>
      <Text style={appStyles.title}>Page 3 screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go to Home" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default Page3Screen;
