import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { appStyles } from '../theme/appTheme';

const ContactsScreen = () => {
  const {
    signIn,
    authState: { isLoggedIn },
  } = useContext(AuthContext);

  return (
    <View>
      <Text style={appStyles.title}>Contacts screen</Text>
      {!isLoggedIn && <Button title="SignIn" onPress={signIn} />}
    </View>
  );
};

export default ContactsScreen;
