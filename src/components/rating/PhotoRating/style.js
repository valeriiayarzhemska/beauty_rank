import { StyleSheet } from 'react-native';

import { imageStyles } from '../../../constants/constantsStyle';
import { colors, windowWidth } from '../../../constants/constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      position: 'relative',
      alignItems: 'flex-start',
      width: '100%',
      zIndex: 1,
    },
    sparklesContainer: {
      position: 'absolute',
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    sparkleBig: {},
    sparkleLittle: {
      position: 'absolute',
      top: 24,
      left: 24,
    },
    sparklesTop: {
      top: 32,
      right: 64,
    },
    sparklesRight: {
      top: 122,
      right: 8,
    },
    sparklesBottom: {
      top: 280,
      left: 180,
    },
    sparklesLeft: {
      top: 222,
      left: 20,
    },
    gradientBorder: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 230,
      height: 230,
      padding: 4,
      borderRadius: 28,
    },
    imageContainer: {
      flex: 1,
      width: 230,
      height: 230,
      borderRadius: 28,
    },
    image: {
      ...imageStyles.cover,
      borderRadius: 28,
    },
    scoreContainer: {
      position: 'absolute',
      top: 140,
      right: 6,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 9,
      width: 186,
      height: 186,
      borderRadius: 100,
      backgroundColor: colors.radioItemBg,
      shadowColor: 'rgba(235, 177, 235, 0.5)',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 1,
      shadowRadius: 52,
      elevation: 10,
      zIndex: 1,
    },
    score: {
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    bgGradientContainer: {
      position: 'absolute',
      width: 194,
      height: 194,
      zIndex: 20,
    },
  });
};
