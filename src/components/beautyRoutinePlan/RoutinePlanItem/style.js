import { StyleSheet } from 'react-native';

import { imageStyles } from '../../../constants/constantsStyle';

export const styles = () => {
  return StyleSheet.create({
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 18,
    },
    itemImageContainer: {
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      width: 40,
      height: 40,
    },
    image: {
      ...imageStyles.contain,
    },
  });
};
