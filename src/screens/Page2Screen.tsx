import React, { useEffect } from 'react';
import { appStyles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigations/StackNavigation';

type Page2ScreenProps = StackNavigationProp<RootStackParamList, 'Page2Screen'>;

const Page2Screen = () => {
  const navigation = useNavigation<Page2ScreenProps>();

  useEffect(() => {
    navigation.setOptions({ title: 'Hello World', headerBackTitle: '' });
  }, []);

  return (
    <View style={appStyles.globalMargin}>
      <Text style={appStyles.title}>Page 2 screen</Text>
      <Button title="Go to Screen 3" onPress={() => navigation.navigate('Page3Screen')} />
    </View>
  );
};

export default Page2Screen;
