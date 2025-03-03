import { StyleSheet } from 'react-native';

import { imageStyles } from '../../../constants/constantsStyle';
import { colors } from '../../../constants/constants';

export const styles = () => {
  return StyleSheet.create({
    row: {
      flex: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 4,
      alignItems: 'center',
      width: '100%',
      paddingBottom: 14,
    },
    rowBorder: {
      borderBottomWidth: 1,
      borderBottomColor: colors.lightPurpleColor,
    },
    imageUser: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 60,
      height: 60,
      borderRadius: 100,
      overflow: 'hidden',
    },
    imageLinear: {
      ...imageStyles.contain,
    },
    image: {
      ...imageStyles.cover,
    },
    score: {
      position: 'absolute',
    },
    bgGradientContainer: {
      width: 52,
      height: 52,
      zIndex: 20,
    },
    scoreContainer: {
      backgroundColor: colors.thirdLightGrayColor,
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
