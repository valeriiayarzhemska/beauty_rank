import { StyleSheet } from 'react-native';

export const styles = (marginTop = 72, marginBottom = 72) => {
  return StyleSheet.create({
    buttonsWrapper: {
      marginTop: marginTop,
      marginBottom: marginBottom,
      gap: 24,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 6,
      width: '100%',
    },
    buttonWrapper: {
      flex: 1,
    },
  });
};
