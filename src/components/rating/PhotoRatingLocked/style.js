import { StyleSheet } from 'react-native';

import { imageStyles } from '../../../constants/constantsStyle';
import { colors, windowWidth } from '../../../constants/constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      padding: 10,
      width: '100%',
      backgroundColor: colors.whiteColor,
      borderRadius: 24,
    },
    gradientBorder: {
      justifyContent: 'center',
      alignItems: 'center',
      height: windowWidth < 400 ? 164 : 180,

      padding: 4,
      borderRadius: 28,
    },
    imageContainer: {
      flex: 1,
      height: windowWidth < 400 ? 164 : 180,
      borderRadius: 28,
    },
    image: {
      ...imageStyles.cover,
      borderRadius: 28,
    },
    scoreContainer: {
      width: 168,
      height: 168,
    },
  });
};
