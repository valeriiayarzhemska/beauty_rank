import { StyleSheet } from 'react-native';

import { imageStyles } from '../../../constants/constantsStyle';

export const styles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    contentContainer: {
      alignItems: 'center',
      gap: 12,
    },
    uploadedContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      gap: 12,
      height: 170,
      width: '100%',
    },
    imageContainer: {
      width: 136,
      height: 136,
    },
    image: {
      ...imageStyles.contain,
    },
  });
};
