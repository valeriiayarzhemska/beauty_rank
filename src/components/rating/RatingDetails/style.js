import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      padding: 8,
      width: '100%',
      backgroundColor: colors.whiteColor,
      borderRadius: 24,
    },
    scoreContainer: {
      gap: 22,
      padding: 14,
      width: '100%',
      backgroundColor: colors.radioItemBg,
      borderRadius: 10,
    },
  });
};
