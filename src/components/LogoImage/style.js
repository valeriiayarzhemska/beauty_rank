import { StyleSheet } from 'react-native';

export const styles = (size, logoStyles) => {
  return StyleSheet.create({
    container: {
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 16,
      ...logoStyles,
    },
    image: {
      width: size,
      height: size,
      resizeMode: 'contain',
    },
  });
};
