import { StyleSheet } from 'react-native';

export const styles = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
    },
    flatListContainer: {
      position: 'relative',
      gap: 10,
      width: '100%',
      height: '100%',
      paddingBottom: 20,
    },
    header: {
      marginVertical: 16,
    },
  });
};
