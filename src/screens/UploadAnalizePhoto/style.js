import { StyleSheet } from 'react-native';
import { colors } from '../../constants/constants';

export const styles = isFullyRegistred => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
    },
    contentContainer: {
      flexGrow: 1,
      justifyContent: isFullyRegistred ? 'flex-start' : 'center',
      alignItems: 'center',
      paddingTop: isFullyRegistred ? 10 : 0,
      paddingBottom: isFullyRegistred ? 60 : 0,
    },
    wrapper: {
      paddingVertical: 50,
      paddingHorizontal: 20,
      gap: 50,
      borderRadius: 24,
      width: '100%',
      backgroundColor: colors.whiteColor,
    },
    title: {
      alignItems: 'center',
      gap: 14,
    },
    uploadedContainer: {
      justifyContent: 'center',
      maxWidth: 325,
    },
    buttonContainer: {
      width: '100%',
    },
  });
};
