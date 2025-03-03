import { StyleSheet } from 'react-native';

export const styles = () => {
  return StyleSheet.create({
    container: {
      position: 'relative',
      flex: 1,
      justifyContent: 'flex-end',
      maxWidth: 23,
      height: 326,
    },
    diagramDate: {
      position: 'absolute',
      top: 340,
      left: -7,
      transform: [{ rotate: '-46deg' }],
    },
  });
};
