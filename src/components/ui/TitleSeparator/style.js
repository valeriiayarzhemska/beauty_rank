import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/constants';

export const styles = () => {
  return StyleSheet.create({
    signInSeparator: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
      marginBottom: 6,
      width: '100%',
    },
    separatorLine: {
      flex: 1,
      height: 1.6,
      backgroundColor: colors.lightPurpleColor,
    },
  });
};
