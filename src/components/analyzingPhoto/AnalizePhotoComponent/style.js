import { StyleSheet } from 'react-native';

export const styles = () => {
  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignContent: 'center',
      width: '100%',
      paddingTop: 20,
      paddingHorizontal: 14,
    },
    contentContainer: {
      justifyContent: 'center',
      alignContent: 'center',
      gap: 30,
      paddingTop: 32,
      paddingBottom: 54,
      paddingHorizontal: 32,
      width: '100%',
      borderRadius: 24,
    },
    imageBgContainer: {
      justifyContent: 'center',
      alignContent: 'center',
      overflow: 'hidden',
      borderRadius: 24,
      width: '100%',
    },
    imageBg: {
      justifyContent: 'center',
      alignContent: 'center',
      width: '100%',
      borderRadius: 24,
    },
    sparklesContainer: {
      position: 'absolute',
      top: 32,
      width: '100%',
    },
    loaderContainer: {
      justifyContent: 'center',
      alignContent: 'center',
      width: '100%',
    },
  });
};
