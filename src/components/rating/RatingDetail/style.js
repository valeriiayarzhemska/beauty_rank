import { Platform, StyleSheet } from 'react-native';

export const styles = () => {
  return StyleSheet.create({
    container: {
      gap: 8,
      width: '100%',
    },
    titles: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 4,
    },
    gradientContainer: {
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      height: Platform.OS === 'android' ? 'max-content' : 20,
    },
  });
};
