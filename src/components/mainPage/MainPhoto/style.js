import { Platform, StyleSheet } from 'react-native';
import { imageStyles } from '../../../constants/constantsStyle';
import { colors, windowWidth } from '../../../constants/constants';

export const styles = height => {
  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: 220,
    },
    imageBg: {
      position: 'relative',
      width: '100%',
      height: 220,
    },
    gradientContainer: {
      position: 'absolute',
      width: '100%',
      height: 60,
      zIndex: 1,
      opacity: 0.8,
    },
    gradientContainerTop: {
      top: 0,
    },
    gradientContainerBottom: {
      bottom: 0,
    },
    gradient: {
      width: '100%',
      height: '100%',
    },
    scoreContainer: {
      position: 'absolute',
      top: 64,
      right: 18,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 9,
      width: 67,
      height: 67,
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
      width: Platform.OS === 'android' ? 'max-content' : 75,
      height: Platform.OS === 'android' ? 'max-content' : 75,
      zIndex: 2,
    },
    bgGradientContainer: {
      position: 'absolute',
      width: 75,
      height: 75,
      zIndex: 20,
    },
    image: {
      ...imageStyles.contain,
    },
  });
};
