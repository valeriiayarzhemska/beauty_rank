import { StyleSheet } from 'react-native';
import { windowHeight } from '../../../constants/constants';
import { imageStyles } from '../../../constants/constantsStyle';

export const styles = scale => {
  const scrollHeight = windowHeight < 760 ? windowHeight - 250 : 524;
  const containerHeight = scale > 2.9 ? scrollHeight - 60 : scrollHeight;

  return StyleSheet.create({
    scrollContainer: {
      alignItems: 'center',
      gap: 40,
    },
    container: {
      marginTop: 44,
      width: '100%',
      maxHeight: containerHeight,
    },
    titlesContainer: {
      alignItems: 'center',
      gap: 30,
    },
    subtitlesContainer: { alignItems: 'center', gap: 10 },
    imageContainer: {
      width: 222,
      height: 222,
    },
    image: {
      ...imageStyles.contain,
    },
  });
};
