import { StyleSheet } from 'react-native';
import { colors } from '../../../../../constants/constants';

export const styles = () => {
  return StyleSheet.create({
    root: {
      alignItems: 'center',
      padding: 4,
      backgroundColor: colors.purpleColor,
      borderRadius: 4,
    },
    text: {
      fontSize: 14,
      color: '#fff',
    },
  });
};
