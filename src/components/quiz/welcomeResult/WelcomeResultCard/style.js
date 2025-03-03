import { StyleSheet } from 'react-native';

import { colors, windowWidth } from '../../../../constants/constants';
import { imageStyles } from '../../../../constants/constantsStyle';

export const styles = () => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      paddingBottom: 30,
      paddingHorizontal: 18,
      width: '100%',
      borderRadius: 24,
      backgroundColor: colors.whiteColor,
    },
    titlesContainer: {
      gap: 40,
      marginBottom: 30,
      paddingTop: 30,
      maxWidth: windowWidth < 370 ? 210 : 240,
    },
    subtitlesContainer: {
      alignItems: 'center',
      gap: 10,
      marginVertical: 30,
    },
    imageContainer: {
      alignItems: 'center',
      width: '100%',
      width: 220,
      height: 200,
      marginBottom: 30,
    },
    image: {
      ...imageStyles.contain,
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
  });
};
