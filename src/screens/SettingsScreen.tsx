import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';
import { appStyles } from '../theme/appTheme';

const SettingsScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ ...appStyles.globalMargin, marginTop: insets.top + 20 }}>
      <Text style={appStyles.title}>Settings screen</Text>
    </View>
  );
};

export default SettingsScreen;
