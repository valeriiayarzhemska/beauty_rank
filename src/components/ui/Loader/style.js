import { StyleSheet } from 'react-native';
import { imageStyles } from '../../../constants/constantsStyle';

export const styles = (height, containerStyles) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: height ? height : 'auto',
      marginTop: 10,
      ...containerStyles,
    },
  });
};
