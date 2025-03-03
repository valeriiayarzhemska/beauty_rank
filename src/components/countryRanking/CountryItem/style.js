import { StyleSheet } from 'react-native';

import { imageStyles } from '../../../constants/constantsStyle';

export const styles = () => {
  return StyleSheet.create({
    row: {
      flex: 3,
      flexDirection: 'row',
      width: '100%',
      paddingBottom: 8,
    },
    place: {
      flex: 0.8,
    },
    country: {
      flex: 1.4,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    score: {
      flex: 0.8,
    },
    iconFlagContainer: {
      width: 34,
      height: 24,
    },
    image: {
      ...imageStyles.contain,
    },
  });
};
