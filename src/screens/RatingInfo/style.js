import { StyleSheet } from 'react-native';

export const styles = isTabBar => {
  return StyleSheet.create({
    container: {
      height: '100%',
      flex: 1,
      width: '100%',
    },
    additionalStyles: {
      height: '100%',
    },
    contentContainer: {
      flexGrow: 1,
      paddingTop: isTabBar ? 16 : 10,
      paddingBottom: isTabBar ? 120 : 40,
      gap: 12,
    },
    title: {
      alignItems: 'center',
      gap: 14,
    },
    buttonContainer: {
      width: '100%',
    },
  });
};
