import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { appStyles, colors } from '../theme/appTheme';
import { Text, View } from 'react-native';

const Tab1Screen = () => {
  return (
    <View style={appStyles.globalMargin}>
      <Text style={appStyles.title}>Icons</Text>
      <Text>
        <Icon name="airplane-outline" size={80} color={colors.primary} />
      </Text>
    </View>
  );
};

export default Tab1Screen;
