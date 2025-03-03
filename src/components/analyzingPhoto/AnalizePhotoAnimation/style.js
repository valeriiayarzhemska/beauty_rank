import { StyleSheet } from 'react-native';

import { imageStyles } from '../../../constants/constantsStyle';
import { colors } from '../../../constants/constants';

export const styles = () => {
  return StyleSheet.create({
    imageContainer: {
      position: 'relative',
      alignContent: 'center',
      width: '100%',
      height: 324,
      borderRadius: 10,
    },
    corner: {
      position: 'absolute',
      width: 55,
      height: 55,
      borderColor: colors.violetColor,
      borderWidth: 2,
      borderRadius: 2,
    },
    topLeft: {
      top: -1,
      left: -1,
      borderTopWidth: 2,
      borderLeftWidth: 2,
      borderBottomWidth: 0,
      borderRightWidth: 0,
    },
    topRight: {
      top: -1,
      right: -1,
      borderTopWidth: 2,
      borderRightWidth: 2,
      borderBottomWidth: 0,
      borderLeftWidth: 0,
    },
    bottomLeft: {
      bottom: -1,
      left: -1,
      borderBottomWidth: 2,
      borderLeftWidth: 2,
      borderTopWidth: 0,
      borderRightWidth: 0,
    },
    bottomRight: {
      bottom: -1,
      right: -1,
      borderBottomWidth: 2,
      borderRightWidth: 2,
      borderTopWidth: 0,
      borderLeftWidth: 0,
    },
    image: {
      ...imageStyles.cover,
    },
    progressContainer: {
      width: '100%',
      minHeight: 60,
      bottom: -190,
      overflow: 'hidden',
      zIndex: 2,
    },
    imageProgress: {
      ...imageStyles.contain,
    },
    progressBorder: {
      top: 28,
      left: 0,
      width: '100%',
      height: 3,
      backgroundColor: colors.whiteColor,
      borderRadius: 50,
    },
    gradientContainer: {
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
    gradientContainerInner: {
      flex: 1,
      width: '100%',
      height: 324,
      top: 0,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
    },
    iconsContainer: {
      position: 'absolute',
      top: 130,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      zIndex: 3,
    },
    crossContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 120,
      height: 120,
    },
    refreshContainer: {
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      width: 70,
      height: 70,
      zIndex: 4,
    },
    icon: {
      ...imageStyles.contain,
    },
  });
};
