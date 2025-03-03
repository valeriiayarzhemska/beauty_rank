import { StyleSheet } from 'react-native';
import { colors } from '../../constants/constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      gap: 30,
      marginTop: 4,
    },
    contentContainer: {
      flexGrow: 1,
      paddingBottom: 120,
      gap: 20,
    },
  });
};
