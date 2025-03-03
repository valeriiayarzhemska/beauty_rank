import { Platform, StyleSheet } from 'react-native';

export const styles = (color, isPadding) => {
  return StyleSheet.create({
    gradient: {
      flex: 1,
    },
    colorBg: {
      backgroundColor: color,
    },
    droidSafeArea: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? 25 : 0,
    },
    safeArea: {
      paddingLeft: isPadding ? 20 : 0,
      paddingRight: isPadding ? 20 : 0,
    },
    gradientSafeArea: {
      paddingLeft: isPadding ? 14 : 0,
      paddingRight: isPadding ? 14 : 0,
    },
  });
};
