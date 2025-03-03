import { StyleSheet } from 'react-native';

export const styles = (height) => {
  return StyleSheet.create({
    container: {
      position: 'relative',
      width: '100%',
      height: height,
    },
    sparkle: {
      position: 'absolute',
      width: 14,
      height: 14,
      resizeMode: 'contain',
    },
    sparkleSmall: {
      position: 'absolute',
      width: 8,
      height: 8,
      resizeMode: 'contain',
    },
  });
};
