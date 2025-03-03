import { StyleSheet } from 'react-native';

export const styles = isFullyRegistred => {
  return StyleSheet.create({
    container: {
      height: '100%',
      flex: 1,
      width: '100%',
    },
    additionalStyles: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },
    contentContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: 1,
      paddingBottom: isFullyRegistred ? 120 : 40,
      gap: 30,
    },
    title: {
      alignItems: 'center',
      gap: 14,
    },
  });
};
