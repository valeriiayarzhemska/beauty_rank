import { StyleSheet } from 'react-native';
import { colors } from '../../constants/constants';

export const styles = () => {
  return StyleSheet.create({
    scrollView: {
      alignItems: 'center',
      paddingTop: 30,
      width: '100%',
    },
    forgotPasswordContainer: {
      alignItems: 'flex-end',
      marginTop: 10,
      width: '100%',
    },
    signUpContainer: {
      alignItems: 'center',
      width: '100%',
      marginBottom: 24,
    },
  });
};
