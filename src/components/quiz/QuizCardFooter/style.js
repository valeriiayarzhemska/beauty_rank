import { StyleSheet } from 'react-native';
import { windowHeight } from '../../../constants/constants';
import { imageStyles } from '../../../constants/constantsStyle';

export const styles = (isScrollInputs, scale, isFullyRegistred, picture) => {
  const scrollHeight = windowHeight < 760 ? windowHeight - 286 : 510;
  const scrollHeightScale = scale > 2.9 ? scrollHeight - 60 : scrollHeight;
  const pictureHeight =
    windowHeight < 760 && picture
      ? scrollHeightScale - 10
      : windowHeight > 759 && picture
      ? scrollHeightScale - 30
      : scrollHeightScale;
  const containerHeight = isFullyRegistred
    ? scrollHeightScale - 38
    : pictureHeight;

  return StyleSheet.create({
    scrollContainer: {
      alignItems: picture ? 'center' : 'flex-start',
    },
    inputContainer: {
      width: '100%',
      maxHeight: isScrollInputs ? containerHeight : 'auto',
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 0,
      right: 0,
    },
    imageContainer: {
      width: 200,
      height: 200,
      marginBottom: 10,
    },
    image: {
      ...imageStyles.contain,
    },
  });
};
