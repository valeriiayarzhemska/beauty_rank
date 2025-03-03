import { StyleSheet } from 'react-native';

import { imageStyles } from '../../../constants/constantsStyle';

export const styles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    contentContainer: {
      alignItems: 'center',
      gap: 12,
    },
    uploadedContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      gap: 12,
      height: 170,
      width: '100%',
    },
    imageContainer: {
      width: 136,
      height: 136,
    },
    image: {
      ...imageStyles.contain,
    },
    modalOverlay: {
      position: 'absolute',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 12,
      bottom: 100,
      width: '100%',
    },
    closeButton: {
      padding: 10,
      backgroundColor: 'red',
      borderRadius: 5,
      marginBottom: 20,
      marginLeft: 20,
    },
    captureButton: {
      padding: 10,
      backgroundColor: 'red',
      borderRadius: 5,
      marginBottom: 20,
      marginLeft: 20,
    },
  });
};
