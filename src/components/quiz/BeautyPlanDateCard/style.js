import { StyleSheet } from 'react-native';

import { windowHeight } from '../../../constants/constants';

export const styles = (color, scale, isFullyRegistred) => {
  const scrollHeight = windowHeight < 760 ? windowHeight - 190 : 578;
  const scrollHeightScale = scale > 2.9 ? scrollHeight - 60 : scrollHeight;
  const containerHeight = isFullyRegistred
    ? scrollHeightScale - 40
    : scrollHeightScale;

  return StyleSheet.create({
    contentContainer: {
      paddingTop: 20,
      maxHeight: containerHeight,
    },
    scrollContainer: {
      flexGrow: 1,
      flex: 1,
      paddingBottom: 20,
      maxHeight: scrollHeight,
      width: '100%',
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      paddingVertical: 16,
      paddingHorizontal: 8,
      backgroundColor: color,
      borderRadius: 10,
    },
    inputContainer: {
      marginBottom: 30,
      gap: 20,
    },
    halfContainer: {
      width: '48.2%',
    },
  });
};
