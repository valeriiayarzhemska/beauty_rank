import { StyleSheet } from 'react-native';
import { screenHeight } from '../../constants/constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      position: 'relative',
      flexGrow: 1,
      alignItems: 'center',
      paddingBottom: 10,
    },
    buttonContainer: {
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 14,
      marginTop: 40,
    },
    textRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
};
