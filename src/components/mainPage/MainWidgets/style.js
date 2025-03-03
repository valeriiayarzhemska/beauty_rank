import { Platform, StyleSheet } from 'react-native';
import { imageStyles } from '../../../constants/constantsStyle';
import { colors, windowWidth } from '../../../constants/constants';

export const styles = () => {
  return StyleSheet.create({
    widgets: {
      gap: 10,
      paddingTop: 74,
    },
    container: {
      flex: 2,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'baseline',
      alignSelf: 'stretch',
      gap: 10,
      width: '100%',
    },
    itemContainer: {
      flex: 1,
      alignSelf: 'stretch',
    },
    itemWithoutPadding: {
      paddingVertical: 0,
      paddingHorizontal: 0,
      gap: 14,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    imageCover: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      borderRadius: 10,
    },
    iconContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 40,
      maxWidth: 40,
      height: 40,
      maxHeight: 40,
      borderRadius: 10,
      backgroundColor: colors.whiteColor,
      zIndex: 1,
    },
    iconFlagContainer: {
      paddingVertical: 9,
      paddingHorizontal: 6.5,
    },
    title: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    countryRating: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 4,
    },
    rankContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 4,
      backgroundColor: colors.orangeColor,
    },
    photoContainer: {
      position: 'relative',
      flex: 2,
      flexDirection: 'row',
      gap: windowWidth < 380 ? 6 : 14,
      paddingBottom: 20,
      paddingHorizontal: 14,
    },
    imageContainer: {
      position: 'relative',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 1,
      height: 79,
      maxHeight: 79,
      borderRadius: 10,
      backgroundColor: colors.orangeColor,
    },
    consentContainer: {
      gap: 10,
      alignItems: 'center',
      minWidth: 58,
    },
    consent: {
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      width: 57,
      height: 47,
    },
    countriesContainer: {
      gap: 8,
    },
    countries: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 4,
    },
    imageBlur: {
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
    loader: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      top: '50%',
      right: '43.5%',
      width: 50,
      height: 50,
      backgroundColor: colors.whiteColor,
      shadowColor: 'rgba(0, 0, 0, 0.7)',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.63,
      shadowRadius: 125,
      elevation: 40,
      borderRadius: 50,
      padding: 6,
      zIndex: 10,
    },
  });
};
