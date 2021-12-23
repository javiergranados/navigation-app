import React, { useContext } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';
import { appStyles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

const SettingsScreen = () => {
  const insets = useSafeAreaInsets();
  const { authState } = useContext(AuthContext);

  return (
    <View style={{ ...appStyles.globalMargin, marginTop: insets.top + 20 }}>
      <Text style={appStyles.title}>Settings screen</Text>
      <Text>{JSON.stringify(authState, null, 2)}</Text>
    </View>
  );
};

export default SettingsScreen;
