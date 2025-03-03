import { StyleSheet } from 'react-native';

import { colors } from '../../../../constants/constants';

export const styles = isUserWoman => {
  return StyleSheet.create({
    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
      paddingVertical: 8,
      backgroundColor: isUserWoman
        ? colors.purpleBgColor
        : colors.secondPurpleBgColor,
      borderRadius: 10,
    },
  });
};
