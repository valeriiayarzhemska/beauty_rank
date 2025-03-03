import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/constants';

export const styles = isLeft => {
  return StyleSheet.create({
    container: {
      position: 'absolute',
      alignItems: isLeft ? 'left' : 'center',
      paddingLeft: 18,
      paddingRight: 18,
      width: '100%',
      height: 500,
      borderRadius: 24,
      backgroundColor: colors.whiteColor,
    },
  });
};
