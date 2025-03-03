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
      gap: 10,
      width: '100%',
      paddingVertical: 30,
      paddingHorizontal: 20,
    },
    header: {
      justifyContent: 'center',
      alignItems: 'center',
      gap: 16,
      marginBottom: 14,
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
    headerTable: {
      flex: 3,
      flexDirection: 'row',
      width: '100%',
      paddingBottom: 8,
      borderBottomWidth: 1,
      borderBottomColor: colors.lightPurpleColor,
    },
    place: {
      flex: 0.8,
    },
    country: {
      flex: 1.4,
    },
    score: {
      flex: 0.8,
    },
  });
};
