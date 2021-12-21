import React, { useEffect } from 'react';
import { appStyles } from '../theme/appTheme';
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigators/StackNavigator';

interface PersonScreenProps extends StackScreenProps<RootStackParamList, 'PersonScreen'> {}

const PersonScreen: React.FC<PersonScreenProps> = ({ route, navigation }) => {
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, []);

  return (
    <View style={appStyles.globalMargin}>
      <Text style={appStyles.title}>{JSON.stringify(params, null, 2)}</Text>
    </View>
  );
};

export default PersonScreen;
