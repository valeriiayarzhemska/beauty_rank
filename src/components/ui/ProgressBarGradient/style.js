import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: colors.whiteColor,
      borderRadius: 100,
      overflow: 'hidden',
    },
    progressBar: {
      borderRadius: 100,
    },
  });
};
