import { StyleSheet } from 'react-native';

import { imageStyles } from '../../../constants/constantsStyle';
import { colors } from '../../../constants/constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      position: 'relative',
      alignItems: 'center',
      gap: 30,
      paddingTop: 30,
      paddingBottom: 150,
      paddingHorizontal: 18,
      width: '100%',
      borderRadius: 24,
      backgroundColor: colors.whiteColor,
    },
    titleContainer: {
      width: '100%',
    },
    imageContainer: {
      alignItems: 'center',
      width: '100%',
      width: 230,
      height: 230,
    },
    image: {
      ...imageStyles.contain,
    },
  });
};
