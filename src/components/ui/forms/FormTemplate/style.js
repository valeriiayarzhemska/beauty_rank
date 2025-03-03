import { StyleSheet } from 'react-native';

export const styles = isButtonLeft => {
  return StyleSheet.create({
    container: {
      display: 'flex',
      width: '100%',
    },
    containerButton: {
      alignItems: isButtonLeft ? 'flex-start' : 'stretch',
      marginTop: 16,
    },
  });
};
