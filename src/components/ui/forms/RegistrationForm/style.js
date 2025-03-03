import { StyleSheet } from 'react-native';

import { colors } from '../../../../constants/constants';

export const styles = () => {
  return StyleSheet.create({
    loader: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      top: '50%',
      right: '43.5%',
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
