import React from 'react';
import { appStyles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigations/StackNavigation';

type Page2ScreenProps = StackNavigationProp<RootStackParamList, 'Page2Screen'>;

const Page2Screen = () => {
  const navigation = useNavigation<Page2ScreenProps>();

  return (
    <View style={appStyles.globalMargin}>
      <Text style={styles.title}>Page 2 screen</Text>
      <Button title="Go to Screen 3" onPress={() => navigation.navigate('Page3Screen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
});

export default Page2Screen;
