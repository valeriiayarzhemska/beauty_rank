import { StyleSheet } from 'react-native';

import { imageStyles } from '../../../constants/constantsStyle';
import { colors } from '../../../constants/constants';

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
      marginBottom: 40,
      paddingTop: 30,
      width: '100%',
    },
    listContainer: {
      gap: 8,
      width: '100%',
    },
    subtitlesContainer: {
      alignItems: 'center',
      gap: 10,
      marginBottom: 10,
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      gap: 10,
    },
    imageContainer: {
      alignItems: 'center',
      width: '100%',
      width: 220,
      height: 220,
      marginBottom: 10,
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
