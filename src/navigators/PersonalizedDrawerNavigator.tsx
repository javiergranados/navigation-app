import React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import SettingsScreen from '../screens/SettingsScreen';

export type PersonalizedDrawerParamList = {
  BottomTabNavigator: undefined;
  SettingsScreen: undefined;
};

const Drawer = createDrawerNavigator<PersonalizedDrawerParamList>();

const DrawerContent = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
          }}
          style={styles.avatar}
        />
      </View>
      {/* Menu options */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('StackNavigator')}>
          <Text style={styles.menuText}>Navegation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('SettingsScreen')}>
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const PersonalizedDrawerNavigator = () => {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        ...(width >= 768 && { headerLeft: () => null }),
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="BottomTabNavigator" options={{ headerShown: false }} component={BottomTabNavigator} />
      <Drawer.Screen name="SettingsScreen" options={{ headerShown: false }} component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 5 : 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 50,
  },
  menuButton: {
    marginVertical: 10,
  },
  menuText: {
    fontSize: 20,
  },
});

export default PersonalizedDrawerNavigator;
