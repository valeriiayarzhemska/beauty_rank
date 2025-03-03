import { StyleSheet } from 'react-native';

export const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    containerAuto: {
      flex: 'auto',
    },
    containerTouchable: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 13,
      paddingHorizontal: 13,
      borderRadius: 28,
      borderWidth: 1,
    },
  });
};
