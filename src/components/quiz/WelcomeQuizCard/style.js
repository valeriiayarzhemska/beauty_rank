import { StyleSheet } from 'react-native';
import { imageStyles } from '../../../constants/constantsStyle';
import { windowHeight } from '../../../constants/constants';

export const styles = isLeft => {
  return StyleSheet.create({
    titlesContainer: {
      alignItems: isLeft ? 'left' : 'center',
      gap: 4,
      marginBottom: 16,
      paddingTop: windowHeight < 760 ? 34 : 50,
    },
    imagesWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 16,
      width: '100%',
    },
    imagesContainer: {
      flex: 1,
      height: 180,
    },
    imageContainer: {
      alignItems: 'center',
      width: '100%',
      width: 200,
      height: 200,
    },
    image: {
      ...imageStyles.contain,
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 0,
      right: 0,
    },
  });
};
