import { StyleSheet } from 'react-native';

export const styles = (isSmall) => {
  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: isSmall ? 8 : 16,
      width: '100%'
    },
  });
};
