import { StyleSheet } from 'react-native';

import { colors } from '../../../../constants/constants';
import { textStyles } from '../../../../constants/constantsStyle';

export const styles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
    },
    containerCheckbox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 18,
      height: 18,
      borderWidth: 1,
      borderColor: colors.borderPurple,
      borderRadius: 2,
    },
    containerCheckboxChecked: {
      width: 12,
      height: 12,
      backgroundColor: colors.borderPurple,
    },
    input: {
      flex: 1,
      marginLeft: -22,
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
  });
};
