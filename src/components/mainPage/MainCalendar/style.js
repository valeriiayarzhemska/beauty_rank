import { StyleSheet } from 'react-native';

import { colors, windowWidth } from '../../../constants/constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      position: 'absolute',
      top: 203,
      flex: 7,
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: windowWidth < 380 ? 6 : 12,
      paddingHorizontal: 20,
      width: '100%',
      zIndex: 2,
    },
    itemContainer: {
      flex: 1,
      alignItems: 'center',
      gap: 4,
      maxWidth: 40,
    },
    item: {
      position: 'relative',
      width: '100%',
      borderRadius: 30,
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.5)',
      overflow: 'hidden',
    },
    itemSelected: {
      backgroundColor: colors.whiteColor,
    },
    imageBg: {
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
    blurBackground: {
      minHeight: 49,
    },
    content: {
      paddingVertical: 8,
      alignItems: 'center',
      overflow: 'hidden',
      gap: 2,
    },
  });
};
