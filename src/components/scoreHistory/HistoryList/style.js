import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      marginTop: 20,
      width: '100%',
      backgroundColor: colors.whiteColor,
      borderRadius: 24,
    },
    flatListContainer: {
      position: 'relative',
      gap: 14,
      width: '100%',
      paddingTop: 50,
      paddingBottom: 30,
      paddingHorizontal: 20,
    },
    header: {
      justifyContent: 'center',
      alignItems: 'center',
      gap: 16,
      marginBottom: 18,
    },
    buttonErrorContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    errorContainer: {
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
      paddingVertical: 30,
      paddingHorizontal: 20,
      backgroundColor: colors.whiteColor,
      borderRadius: 24,
      width: '100%',
      height: 250,
    },
  });
};
