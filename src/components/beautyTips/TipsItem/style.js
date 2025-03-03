import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      padding: 20,
      borderRadius: 24,
      backgroundColor: colors.whiteColor,
    },
    wrapper: {
      gap: 10,
      padding: 14,
      borderRadius: 10,
      backgroundColor: colors.radioItemBg,
    },
  });
};
