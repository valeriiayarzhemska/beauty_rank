import { StyleSheet } from 'react-native';

export const styles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      flex: 2,
      gap: 10,
      justifyContent: 'space-between',
      alignContent: 'baseline',
      alignSelf: 'stretch',
      width: '100%',
      marginTop: 24,
    },
    itemContainer: {
      flex: 1,
      alignSelf: 'stretch',
    },
    item: {
      position: 'relative',
      justifyContent: 'center',
      width: '100%',
      overflow: 'hidden',
      minHeight: 64,
    },
    content: {
      flexDirection: 'row',
      gap: 10,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 14,
      paddingLeft: 20,
      paddingRight: 51,
      width: '100%',
    },
    contentRight: {
      paddingLeft: 51,
      paddingRight: 20,
    },
  });
};
