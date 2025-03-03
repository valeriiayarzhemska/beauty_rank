import { StyleSheet } from 'react-native';

import { imageStyles } from '../../../constants/constantsStyle';
import { colors, windowWidth } from '../../../constants/constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      paddingVertical: 20,
      paddingHorizontal: 14,
      gap: 10,
      width: '100%',
      backgroundColor: 'rgba(235, 177, 235, 0.3)',
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.3)',
      borderRadius: 24,
    },
    imageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 40,
      height: 40,
      borderRadius: 10,
      backgroundColor: colors.whiteColor,
    },
    image: {
      ...imageStyles.contain,
      width: 27,
      height: 20,
    },
    countryContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 4,
    },
    country: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10,
    },
    countriesContainer: {
      gap: 8,
    },
    countries: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 4,
    },
  });
};
