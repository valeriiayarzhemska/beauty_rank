import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/constants';
import { imageStyles } from '../../../constants/constantsStyle';

export const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      gap: 8,
      marginRight: 10,
      padding: 10,
      shadowColor: 'rgba(88, 66, 124, 0.1)',
      shadowOffset: { width: 0.76, height: 1.53 },
      shadowOpacity: 1,
      shadowRadius: 11.47,
      elevation: 3,
      backgroundColor: colors.whiteColor,
      borderRadius: 14,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      paddingBottom: 8,
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(234, 234, 234, 0.92)',
    },
    imageContainer: {
      width: 50,
      height: 50,
      borderWidth: 1,
      borderColor: colors.whiteColor,
      borderRadius: 50,
      shadowColor: 'rgba(88, 66, 124, 0.3)',
      shadowOffset: { width: 0, height: 1.27 },
      shadowOpacity: 1,
      shadowRadius: 7,
      elevation: 7,
    },
    image: {
      ...imageStyles.cover,
      borderRadius: 50,
    },
    titles: {
      gap: 4,
    },
    verified: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    rating: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
};
