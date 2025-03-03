import { StyleSheet } from 'react-native';
import { colors } from '../../constants/constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      height: '100%',
      flex: 1,
      width: '100%',
    },
    contentContainer: {
      flexGrow: 1,
      paddingTop: 120,
      paddingBottom: 120,
      gap: 10,
    },
    content: {
      justifyContent: 'center',
      alignItems: 'center',
      gap: 20,
      paddingVertical: 40,
      paddingHorizontal: 20,
      width: '100%',
      backgroundColor: colors.whiteColor,
      borderRadius: 24,
    },
  });
};
