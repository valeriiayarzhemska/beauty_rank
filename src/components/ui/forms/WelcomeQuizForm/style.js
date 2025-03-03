import { StyleSheet } from 'react-native';
import { screenHeight, windowHeight } from '../../../../constants/constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      flexGrow: 1,
      minHeight: screenHeight,
    },
    loader: {
      marginTop: windowHeight < 760 ? 14 : 30,
      marginBottom: windowHeight < 760 ? 26 : 50,
      gap: windowHeight < 760 ? 8 : 10,
    },
  });
};
