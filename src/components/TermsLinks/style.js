import { StyleSheet } from 'react-native';

import { colors } from '../../constants/constants';
import { textStyles } from '../../constants/constantsStyle';

export const styles = () => {
  return StyleSheet.create({
    terms: {
      ...textStyles.semiBold,
      fontSize: 14,
      color: colors.darkGrayColor,
      textAlign: 'center',
    },
    termLinks: {
      textDecorationLine: 'underline',
    },
    termsContainer: {
      marginTop: 6,
      alignItems: 'center',
    },
  });
};
