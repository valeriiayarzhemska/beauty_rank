import { StyleSheet } from 'react-native';
import { colors, windowWidth } from '../../../constants/constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      gap: 50,
      marginTop: 20,
      paddingTop: 50,
      paddingBottom: 106,
      paddingHorizontal: 20,
      backgroundColor: colors.whiteColor,
      borderRadius: 24,
    },
    diagramContainer: {
      flexDirection: 'row',
      gap: 12,
      height: 326,
    },
    diagrams: {
      flexDirection: 'row',
      flex: 10,
      gap: windowWidth < 370 ? 16 : 20,
      height: 326,
    },
    error: {
      gap: 4,
      alignItems: 'center',
    },
    noItems: {
      alignItems: 'center',
      width: '100%',
    },
  });
};
