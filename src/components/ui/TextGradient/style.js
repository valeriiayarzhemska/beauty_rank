import { StyleSheet } from 'react-native';

export const styles = () => {
  return StyleSheet.create({
    maskedView: {
      flexDirection: 'row',
      height: '100%',
    },
    maskWrapper: {
      backgroundColor: 'transparent',
      flex: 1,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      flex: 1,
      backgroundColor: '#324376',
    },
  });
};
