import React from 'react';
import { appStyles } from '../theme/appTheme';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigators/StackNavigator';

interface Page1ScreenProps extends StackScreenProps<RootStackParamList, 'Page1Screen'> {}

const Page1Screen = ({ navigation }: Page1ScreenProps) => {
  return (
    <View style={appStyles.globalMargin}>
      <Text style={appStyles.title}>Page 1 screen</Text>
      <Button title="Go to Screen 2" onPress={() => navigation.navigate('Page2Screen')} />
      <Text style={{ fontSize: 18, marginTop: 20, marginLeft: 5 }}>Navigate with arguments</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('PersonScreen', { id: 1, name: 'Peter' })}
        >
          <Text style={styles.buttonText}>Peter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('PersonScreen', { id: 2, name: 'Maria' })}
        >
          <Text style={styles.buttonText}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 50,
    backgroundColor: '#5856d6',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginTop: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Page1Screen;
