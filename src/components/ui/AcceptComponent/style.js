import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/constants';
import { imageStyles } from '../../../constants/constantsStyle';

export const styles = () => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      gap: 20,
      paddingVertical: 46,
      paddingHorizontal: 20,
      width: '100%',
      backgroundColor: colors.whiteColor,
      borderRadius: 24,
    },
    titles: {
      gap: 6,
    },
    imageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 160,
      height: 160,
    },
    image: {
      ...imageStyles.contain,
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 10,
      width: '100%',
    },
    button: {
      flex: 1,
    },
  });
};
