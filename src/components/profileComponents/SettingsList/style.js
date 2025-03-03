import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      gap: 10,
      marginTop: 24,
      paddingTop: 50,
      paddingBottom: 20,
      paddingHorizontal: 20,
      width: '100%',
      backgroundColor: colors.whiteColor,
      borderRadius: 24,
    },
    settings: {
      gap: 14,
      marginTop: 30,
      marginBottom: 50,
    },
    buttonContainer: {
      alignItems: 'flex-start',
    },
  });
};
