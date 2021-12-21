import { Platform, StyleSheet } from 'react-native';

const appStyles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 5 : 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});

export { appStyles };
