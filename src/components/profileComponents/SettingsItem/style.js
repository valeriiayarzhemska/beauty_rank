import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/constants';

export const styles = isLast => {
  return StyleSheet.create({
    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: !isLast ? 14 : 0,
      borderBottomWidth: !isLast ? 1 : 0,
      borderBottomColor: colors.lightPurpleColor,
      width: '100%',
    },
    icon: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
    arrow: {
      transform: [{ rotate: '-90deg' }],
    },
  });
};
