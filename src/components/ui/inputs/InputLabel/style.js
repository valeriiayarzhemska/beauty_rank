import { StyleSheet } from 'react-native';

export const styles = (isLabelShown, isSquare) => {
  const topSmallValue = isSquare ? 6 : 12;
  const topBigValue = isSquare ? 13 : 21;

  return StyleSheet.create({
    container: {
      position: 'absolute',
      top: isLabelShown ? topSmallValue : topBigValue,
      left: isSquare ? 16 : 54,
      zIndex: 1,
    },
  });
};
