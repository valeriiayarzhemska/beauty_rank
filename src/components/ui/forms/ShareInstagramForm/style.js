import { StyleSheet } from 'react-native';
export const styles = isLastSlide => {
  return StyleSheet.create({
    container: {
      flexGrow: 1,
      minHeight: isLastSlide ? 720 : '100%',
      gap: 10,
    },
  });
};
