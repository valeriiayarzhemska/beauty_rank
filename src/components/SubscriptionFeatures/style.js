import { StyleSheet } from 'react-native';

export const styles = () => {
  return StyleSheet.create({
    container: {
      gap: 8,
      width: '100%',
    },
    feature: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      width: '100%',
    },
    featureBorder: {
      paddingBottom: 8,
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(234, 234, 234, 0.92)',
    },
    feautureText: {
      flex: 1,
    },
  });
};
