import { StyleSheet } from 'react-native';

export const styles = () => {
  return StyleSheet.create({
    shadowContainer: {
      top: -30,
      shadowColor: 'rgba(88, 66, 124, 0.1)',
      shadowOffset: { width: 1, height: 2 },
      shadowOpacity: 1,
      shadowRadius: 8,
      elevation: 5,
      backgroundColor: 'transparent',
      borderRadius: 100,
    },
    roundContainer: {
      width: 75,
      height: 75,
      borderRadius: 50,
    },
    icon: {
      position: 'absolute',
      top: '22%',
      left: '18%',
    },
  });
};
