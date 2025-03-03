import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/constants';
import { imageStyles } from '../../../constants/constantsStyle';

export const styles = () => {
  return StyleSheet.create({
    card: {
      position: 'absolute',
      width: 150,
      height: 170,
      borderRadius: 10,
    },
    centerCard: {
      position: 'absolute',
      width: 210,
      height: 360,
      borderRadius: 10,
      elevation: 40,
      backgroundColor: 'transparent',
      shadowColor: 'rgba(0, 0, 0, 0.63)',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.63,
      shadowRadius: 125,
    },
    image: {
      ...imageStyles.cover,
    },
  });
};
