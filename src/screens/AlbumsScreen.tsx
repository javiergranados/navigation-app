import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { appStyles } from '../theme/appTheme';

const AlbumsScreen = () => {
  const {
    logOut,
    authState: { isLoggedIn },
  } = useContext(AuthContext);

  return (
    <View>
      <Text style={appStyles.title}>Albums screen</Text>
      {isLoggedIn && <Button title="Log out" onPress={logOut} />}
    </View>
  );
};

export default AlbumsScreen;
