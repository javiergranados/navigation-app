import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { appStyles, colors } from '../theme/appTheme';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab1Screen = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ ...appStyles.globalMargin, marginTop: top + 10 }}>
      <Text style={appStyles.title}>Icons</Text>
      <Text>
        <Icon name="airplane-outline" size={80} color={colors.primary} />
        <Icon name="attach-outline" size={80} color={colors.primary} />
        <Icon name="bonfire-outline" size={80} color={colors.primary} />
        <Icon name="calculator-outline" size={80} color={colors.primary} />
        <Icon name="chatbubble-ellipses-outline" size={80} color={colors.primary} />
        <Icon name="images-outline" size={80} color={colors.primary} />
        <Icon name="leaf-outline" size={80} color={colors.primary} />
      </Text>
    </View>
  );
};

export default Tab1Screen;
