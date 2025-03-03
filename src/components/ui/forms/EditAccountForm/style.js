import { StyleSheet } from 'react-native';

import { colors } from '../../../../constants/constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      gap: 20,
      paddingTop: 46,
      paddingBottom: 20,
      paddingHorizontal: 20,
      width: '100%',
      backgroundColor: colors.whiteColor,
      borderRadius: 24,
    },
    forms: {
      flex: 1,
      gap: 10,
      width: '100%',
    },
  });
};
