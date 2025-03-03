import { StyleSheet } from 'react-native';
import { imageStyles } from '../../constants/constantsStyle';

export const styles = height => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      marginTop: 10,
    },
    animation: {
      width: 300,
      height: 40,
    },
  });
};
