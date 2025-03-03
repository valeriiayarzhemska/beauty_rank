import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/constants';

export const styles = minHeight => {
  return StyleSheet.create({
    itemContainer: {
      position: 'relative',
      flex: 1,
      gap: 4,
      shadowColor: colors.purpleColor,
      shadowOffset: {
        width: 0,
        height: 14,
      },
      shadowOpacity: 0.5,
      shadowRadius: 29.4 / 2,
      elevation: 14,
      borderRadius: 30,
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.4)',
      overflow: 'hidden',
    },
    imageBg: {
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
    content: {
      gap: 10,
      width: '100%',
      height: '100%',
      paddingVertical: 20,
      paddingHorizontal: 14,
      minHeight: minHeight ? minHeight : 'auto',
    },
  });
};
