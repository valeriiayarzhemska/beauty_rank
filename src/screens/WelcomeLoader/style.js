import { StyleSheet } from 'react-native';
import { imageStyles } from '../../constants/constantsStyle';

export const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
    },
    logoWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 230,
      width: 230,
      position: 'relative',
    },
    logoImage: {
      ...imageStyles.contain,
    },
  });
};
