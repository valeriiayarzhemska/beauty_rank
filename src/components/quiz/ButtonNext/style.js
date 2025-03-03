import { Platform, StyleSheet } from 'react-native';

export const styles = () => {
  return StyleSheet.create({
    buttonContainer: {
      position: 'absolute',
      bottom: Platform.OS === 'android' ? -0.42 : 0,
      right: 0,
    },
  });
};
