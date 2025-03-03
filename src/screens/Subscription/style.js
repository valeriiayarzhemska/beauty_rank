import { StyleSheet } from 'react-native';
import { colors } from '../../constants/constants';
import { textStyles } from '../../constants/constantsStyle';

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
      alignItems: 'center',
      paddingBottom: 40,
      gap: 10,
    },
    wrapper: {
      alignItems: 'center',
      gap: 40,
      marginBottom: 36,
      paddingTop: 50,
      paddingBottom: 20,
      paddingHorizontal: 20,
      width: '100%',
      backgroundColor: colors.whiteColor,
      borderRadius: 24,
    },
    content: {
      alignItems: 'center',
      gap: 20,
      width: '100%',
    },
    buttonContainer: {
      gap: 10,
      width: '100%',
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    modalContent: {
      backgroundColor: colors.whiteColor,
      borderRadius: 10,
      paddingVertical: 20,
      paddingHorizontal: 20,
      width: '100%',
      height: 370,
      gap: 20,
    },
    loader: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      top: '50%',
      right: '43.5%',
      width: 50,
      height: 50,
      backgroundColor: colors.whiteColor,
      shadowColor: 'rgba(0, 0, 0, 0.7)',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.63,
      shadowRadius: 125,
      elevation: 40,
      borderRadius: 50,
      padding: 6,
      zIndex: 10,
    },
  });
};
