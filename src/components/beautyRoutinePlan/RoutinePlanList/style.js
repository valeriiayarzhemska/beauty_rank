import { StyleSheet } from 'react-native';
import { imageStyles } from '../../../constants/constantsStyle';

export const styles = () => {
  return StyleSheet.create({
    listContainer: {
      position: 'relative',
      gap: 30,
      marginBottom: 20,
    },
    listImageContainer: {
      position: 'absolute',
      top: -6,
      left: -6,
      width: 52,
      height: 262,
    },
    image: {
      ...imageStyles.contain,
    },
  });
};
