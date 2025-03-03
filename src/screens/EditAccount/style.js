import { StyleSheet } from 'react-native';

export const styles = () => {
  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      gap: 30,
      marginTop: 4,
    },
    contentContainer: {
      flexGrow: 1,
      paddingBottom: 120,
      gap: 20,
    },
  });
};
