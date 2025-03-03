import { StyleSheet } from 'react-native';

export const styles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      height: 4,
      borderRadius: 2,
      overflow: 'hidden',
    },
    slice: {
      height: '100%',
    },
  });
};
