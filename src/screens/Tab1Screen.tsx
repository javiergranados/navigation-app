import React from 'react';
import { appStyles, colors } from '../theme/appTheme';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';

const Tab1Screen = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ ...appStyles.globalMargin, marginTop: top + 10 }}>
      <Text style={appStyles.title}>Icons</Text>
      <Text>
        <TouchableIcon name="airplane-outline" size={80} color={colors.primary} />
        <TouchableIcon name="attach-outline" size={80} color={colors.primary} />
        <TouchableIcon name="bonfire-outline" size={80} color={colors.primary} />
        <TouchableIcon name="calculator-outline" size={80} color={colors.primary} />
        <TouchableIcon name="chatbubble-ellipses-outline" size={80} color={colors.primary} />
        <TouchableIcon name="images-outline" size={80} color={colors.primary} />
        <TouchableIcon name="leaf-outline" size={80} color={colors.primary} />
      </Text>
    </View>
  );
};

export default Tab1Screen;
