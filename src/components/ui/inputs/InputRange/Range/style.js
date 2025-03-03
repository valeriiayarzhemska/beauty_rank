import { StyleSheet } from 'react-native';

export const styles = placeholder => {
  return StyleSheet.create({
    none: {
      display: 'none',
    },
    container: {
      position: 'relative',
      alignItems: 'center',
      width: '100%',
    },
    textContainer: {
      position: 'absolute',
      top: 24,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      width: '100%',
    },
    input: {
      flex: 1,
    },
    recommended: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: 4,
      marginTop: -6,
      paddingHorizontal: 10,
      width: '100%',
    },
    slider: {
      width: '102%',
    },
    horizontalContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    text: {
      color: 'white',
      fontSize: 20,
    },
    valueText: {
      width: 50,
      color: 'white',
      fontSize: 20,
    },
  });
};
