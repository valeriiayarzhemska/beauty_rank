import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      gap: 30,
      paddingVertical: 50,
      paddingHorizontal: 20,
      width: '100%',
      backgroundColor: colors.whiteColor,
      borderRadius: 24,
    },
    titlesContainer: {
      alignItems: 'center',
      gap: 14,
      width: '100%',
    },
    footer: {
      padding: 14,
      gap: 10,
      backgroundColor: colors.radioItemBg,
      borderRadius: 10,
    },
    scoreContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
      paddingBottom: 10,
      width: '100%',
      borderBottomWidth: 1,
      borderBottomColor: colors.lightPurpleColor,
    },
    scoreText: {
      flex: 1,
    },
    score: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 70,
      height: 70,
      backgroundColor: colors.whiteColor,
      borderRadius: 20,
    },
    descriptionContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 4,
    },
    description: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
    buttonContainer: {
      width: '100%',
    },
  });
};
