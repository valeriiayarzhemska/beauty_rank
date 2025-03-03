import { StyleSheet } from 'react-native';

export const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 2,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: 10,
      width: '100%',
    },
    /* flatListContainer: {
      gap: 10,
      width: '100%',
    }, */
  });
};
