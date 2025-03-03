import { StyleSheet } from 'react-native';

import { windowHeight } from '../../../constants/constants';

export const styles = (color, scale, isFullyRegistred) => {
  const scrollHeight = windowHeight < 760 ? windowHeight - 190 : 578;
  const scrollHeightScale = scale > 2.9 ? scrollHeight - 60 : scrollHeight;
  const containerHeight = isFullyRegistred
    ? scrollHeightScale - 40
    : scrollHeightScale;

  return StyleSheet.create({
    scrollContainer: {
      paddingVertical: 20,
      width: '100%',
      maxHeight: containerHeight,
      flex: 1,
      flexGrow: 1,
    },
    container: {
      paddingTop: 10,
      paddingBottom: 8,
      backgroundColor: color,
      borderRadius: 10,
    },
    containerPadding: {
      paddingHorizontal: 10,
      marginBottom: -15,
    },
    inputContainer: {
      gap: 20,
      paddingBottom: 24,
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 0,
      right: 0,
    },
    containerRow: {
      flexDirection: 'row',
      gap: 10,
      paddingHorizontal: 10,
    },
  });
};
