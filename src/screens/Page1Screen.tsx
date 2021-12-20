import React from 'react';
import { appStyles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigations/StackNavigation';
import { Text, View, StyleSheet, Button } from 'react-native';

interface Page1ScreenProps extends StackScreenProps<RootStackParamList, 'Page1Screen'> {}

const Page1Screen = ({ navigation }: Page1ScreenProps) => {
  return (
    <View style={appStyles.globalMargin}>
      <Text style={styles.title}>Page 1 screen</Text>
      <Button title="Go to Screen 2" onPress={() => navigation.navigate('Page2Screen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
});

export default Page1Screen;
