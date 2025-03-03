import { StyleSheet } from 'react-native';

import { colors } from '../../../../constants/constants';

export const styles = () => {
  return StyleSheet.create({
    tabBarStyle: {
      position: 'absolute',
      height: 74,
      backgroundColor: colors.whiteColor,
      elevation: 0,
      bottom: 0,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
  });
};
