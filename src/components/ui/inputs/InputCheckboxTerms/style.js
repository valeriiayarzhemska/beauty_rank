import { StyleSheet } from 'react-native';

import { colors } from '../../../../constants/constants';

export const styles = () => {
  return StyleSheet.create({
    info: {
      width: '92%'
    },
    inputDefault: {
      fontFamily: 'NunitoSansRegular',
      fontSize: 14,
      fontWeight: 400,
    },
    inputText: {
      color: colors.blackColor,
    },
    inputTextLink: {
      color: colors.purpleColor,
      textDecorationLine: 'underline',
    },
    errorInput: {
      color: colors.redColor,
    },
    errorInputLink: {
      color: colors.redColor,
      textDecorationLine: 'underline',
    },
  });
};
