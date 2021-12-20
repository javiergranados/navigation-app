import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Page2Screen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Page 2 screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
});

export default Page2Screen;
