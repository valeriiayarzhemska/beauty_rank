import { StyleSheet } from 'react-native';
import { textStyles } from '../../constants/constantsStyle';
import { colors } from '../../constants/constants';

export const styles = () => {
  return StyleSheet.create({
    scrollView: {
      alignItems: 'center',
      paddingTop: 30,
      width: '100%',
    },
    signUpContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 4,
      width: '100%',
      marginTop: 20,
      marginBottom: 24,
    },
    info: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
    },
    textLink: {
      ...textStyles.regular,
      color: colors.purpleColor,
      textAlign: 'center',
      textDecorationLine: 'underline',
    },
  });
};
