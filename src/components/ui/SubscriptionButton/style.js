import { StyleSheet } from 'react-native';

import { colors } from '../../../constants/constants';

export const styles = () => {
  return StyleSheet.create({
    contentContainer: {
      width: '100%',
    },
    container: {
      alignItems: 'center',
      gap: 10,
      paddingBottom: 20,
      width: '100%',
      backgroundColor: colors.whiteColor,
      borderRadius: 24,
    },
    list: {
      width: '100%',
    },
    itemContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
      width: '100%',
    },
    item: {
      gap: 6,
      width: '100%',
      padding: 14,
      borderRadius: 16,
      backgroundColor: colors.radioItemBg,
    },
    titles: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 4,
      width: '100%',
    },
    subtitles: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 4,
      width: '100%',
    },
    loader: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      top: -270,
      right: '43%',
      width: 50,
      height: 50,
      backgroundColor: colors.whiteColor,
      shadowColor: 'rgba(0, 0, 0, 0.7)',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.63,
      shadowRadius: 125,
      elevation: 40,
      borderRadius: 50,
      padding: 6,
      zIndex: 10,
    },
  });
};
