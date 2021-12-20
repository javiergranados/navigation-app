import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Page3Screen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Page 3 screen</Text>
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

export default Page3Screen;
