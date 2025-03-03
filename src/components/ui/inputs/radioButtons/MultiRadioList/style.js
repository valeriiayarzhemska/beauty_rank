import { StyleSheet } from 'react-native';
import { windowWidth } from '../../../../../constants/constants';

export const styles = isFull => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 10,
      // height: windowWidth < 386 ? 510 : 560,
    },
    itemContainer: {
      width: isFull ? '100%' : '48%',
    },
  });
};
