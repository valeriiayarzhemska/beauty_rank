import { StyleSheet } from 'react-native';

export const styles = (isSmall, isFull, isSquare, bColor) => {
  const checkSmall = !isSquare && isSmall;
  const checkSquare = isSquare;

  return StyleSheet.create({
    containerTouchable: {
      width: isFull ? '100%' : 'auto',
      height: isSmall ? 46 : 54,
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      paddingLeft: isSmall ? 12 : 20,
      paddingRight: isSmall ? 12 : 20,
      width: isFull ? '100%' : 'auto',
      height: isSmall ? 46 : 54,
      borderTopLeftRadius: checkSmall ? 28 : checkSquare ? 10 : 50,
      borderTopRightRadius: checkSmall ? 28 : checkSquare ? 0 : 50,
      borderBottomLeftRadius: checkSmall ? 28 : checkSquare ? 0 : 50,
      borderBottomRightRadius: checkSmall ? 28 : checkSquare ? 24 : 50,
      borderWidth: 1,
      borderColor: bColor,
    },
  });
};
