import { StyleSheet } from 'react-native';

import { windowWidth } from '../../../constants/constants';

export const styles = height => {
  return StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      width: windowWidth,
      minWidth: windowWidth,
    },
    carouselContainer: {
      width: windowWidth,
      height: height,
      alignItems: 'center',
      justifyContent: 'center',
    },
    gradient: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: 40,
    },
    leftGradient: {
      left: 0,
    },
    rightGradient: {
      right: 0,
    },
  });
};
