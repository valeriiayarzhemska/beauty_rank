import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/constants';
import { imageStyles } from '../../../constants/constantsStyle';

export const styles = isMan => {
  return StyleSheet.create({
    container: {
      flex: 1 / 3,
      maxWidth: '32%',
      backgroundColor: colors.whiteColor,
      borderRadius: 24,
      borderRadius: 10,
      overflow: 'hidden',
    },
    wrapper: {
      position: 'relative',
      width: '100%',
      height: 140,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    imageBg: {
      position: 'absolute',
      width: '100%',
      height: 140,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    contentContainer: {
      justifyContent: 'space-between',
      padding: 6,
      width: '100%',
      height: '100%',
    },
    gradientContainer: {
      height: '100%',
      width: '100%',
      position: 'absolute',
    },
    gradient: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer: {
      width: 20,
      height: 20,
    },
    userInfo: {
      gap: 2,
    },
    country: {
      flexDirection: 'row',
      gap: 6,
      alignItems: 'center',
    },
    countryImg: {
      width: 12,
      height: 10,
    },
    image: {
      ...imageStyles.contain,
    },
    analysisContainer: {
      flex: 2,
      flexDirection: 'row',
      gap: 6,
      paddingVertical: 7,
      paddingHorizontal: 10,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: colors.thirdLightPurpleColor,
    },
    place: {
      flex: 1,
      flexDirection: 'row',
      gap: 2,
      alignItems: 'flex-end',
    },
    score: {
      position: 'absolute',
      top: 5,
      right: 5,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: 34,
      height: 34,
      backgroundColor: colors.thirdLightPurpleColor,
      borderRadius: 50,
      borderWidth: 2,
      borderColor: isMan ? colors.purpleColor : '#BA426D',
    },
  });
};
