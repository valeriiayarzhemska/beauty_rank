import { StyleSheet } from 'react-native';
import { colors, windowHeight } from '../../constants/constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      height: '100%',
      flex: 1,
      width: '100%',
    },
    additionalStyles: {
      height: '100%',
    },
    contentContainer: {
      flexGrow: 1,
      paddingBottom: 40,
      gap: 10,
    },
    title: {
      alignItems: 'center',
      gap: 14,
    },
  });
};
