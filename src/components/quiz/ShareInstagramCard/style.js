import { StyleSheet } from 'react-native';
import { imageStyles } from '../../../constants/constantsStyle';
import { windowHeight } from '../../../constants/constants';

export const styles = (pictureSize, scale) => {
  const width = pictureSize?.width ? pictureSize.width : 200;
  const height = pictureSize?.height ? pictureSize.height : 200;

  return StyleSheet.create({
    titlesContainer: {
      alignItems: 'center',
      gap: 4,
      marginBottom: 30,
      paddingTop: 20,
    },
    imageContainer: {
      position: 'relative',
      alignItems: 'center',
      width: scale > 2.9 ? width - 20 : width,
      height: scale > 2.9 ? height - 20 : height,
    },
    iconContainer: {
      position: 'absolute',
      top: -8,
      right: -10,
      width: 63,
      height: 59,
    },
    image: {
      ...imageStyles.contain,
    },
    warningContainer: {
      marginTop: 18,
    },
  });
};
