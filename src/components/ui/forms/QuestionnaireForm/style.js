import { StyleSheet } from 'react-native';
import { colors } from '../../../../constants/constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      gap: 20,
      paddingTop: 46,
      paddingBottom: 20,
      paddingHorizontal: 20,
      width: '100%',
      backgroundColor: colors.whiteColor,
      borderRadius: 24,
    },
    consent: {
      flex: 2,
      marginTop: 28,
      marginBottom: 8,
      flexDirection: 'row',
      gap: 30,
    },
    consentText: {
      flex: 1,
    },
    consentList: {
      flex: 1,
    },
  });
};
