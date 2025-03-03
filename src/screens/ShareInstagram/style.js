import { StyleSheet } from 'react-native';
import { screenHeight } from '../../constants/constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      flexGrow: 1,
      paddingBottom: 60,
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 20,
      justifyContent: 'center',
      width: '100%',
    },
  });
};
