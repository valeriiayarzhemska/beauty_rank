import { StyleSheet } from 'react-native';
import { windowHeight } from '../../constants/constants';

export const styles = () => {
  return StyleSheet.create({
    gradient: {
      flex: 1,
    },
    container: {
      flex: 1,
      width: '100%',
      height: windowHeight - 94,
    },
    contentContainer: {
      flexGrow: 1,
      paddingBottom: 94,
    },
    sparklesContainer: {
      flex: 1,
      justifyContent: 'flex-start',
      paddingHorizontal: 20,
      minWidth: '100%',
      minHeight: '100%',
      objectPosition: 'top',
    },
  });
};
