import { Platform, StyleSheet } from 'react-native';

import { imageStyles } from '../../constants/constantsStyle';
import { colors } from '../../constants/constants';

export const styles = isFullyRegistred => {
  return StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: isFullyRegistred ? 80 : 20,
    },
    contentContainer: { flex: 1, paddingBottom: 10 },
    imageContainer: {
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 20,
      marginBottom: 20,
      width: 300,
      height: 300,
    },
    image: {
      ...imageStyles.contain,
    },
    titleContainer: {
      position: 'relative',
      marginBottom: 40,
      maxWidth: 330,
    },
    dotsContainer: {
      position: 'absolute',
      flexDirection: 'row',
      justifyContent: Platform.OS === 'android' ? 'center' : 'flex-start',
      alignItems: Platform.OS === 'android' ? 'flex-start' : 'flex-end',
      right: 0,
    },
    dot: {
      width: 4,
      height: 4,
      borderRadius: 5,
      backgroundColor: colors.whiteColor,
      marginBottom: Platform.OS === 'android' ? 0 : 3,
      marginHorizontal: 2,
    },
  });
};
