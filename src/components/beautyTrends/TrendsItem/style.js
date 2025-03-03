import { StyleSheet } from 'react-native';

import { colors, windowWidth } from '../../../constants/constants';
import { imageStyles } from '../../../constants/constantsStyle';

export const styles = () => {
  return StyleSheet.create({
    container: {
      width: '48%',
      padding: windowWidth < 380 ? 10 : 20,
      backgroundColor: colors.whiteColor,
      borderRadius: 24,
    },
    content: {
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
      padding: 14,
      backgroundColor: colors.radioItemBg,
      borderRadius: 10,
    },
    imageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 80,
      height: 80,
    },
    image: {
      ...imageStyles.contain,
    },
  });
};
