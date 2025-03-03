import { StyleSheet } from 'react-native';

import { colors } from '../../../../constants/constants';

export const styles = placeholder => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
    },
    fullWidth: {
      width: '100%',
    },
    iconWrapper: {
      position: 'absolute',
      top: 16,
      right: 14,
      backgroundColor: colors.whiteColor,
      zIndex: 1,
    },
    input: {
      flex: 1,
    },
    errorInput: {
      borderColor: colors.redColor,
      borderWidth: 1,
    },
    eyeWrapper: {
      position: 'absolute',
      right: 20,
      zIndex: 1,
    },
    errorText: {
      position: 'absolute',
      bottom: -18,
      fontSize: 10,
      color: colors.redColor,
    },
  });
};
