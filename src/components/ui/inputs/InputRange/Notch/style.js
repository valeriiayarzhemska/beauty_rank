import { StyleSheet } from 'react-native';
import { colors } from '../../../../../constants/constants';

export const styles = () => {
  return StyleSheet.create({
    root: {
      width: 8,
      height: 8,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderTopColor: colors.purpleColor,
      borderLeftWidth: 4,
      borderRightWidth: 4,
      borderTopWidth: 8,
    },
  });
};
