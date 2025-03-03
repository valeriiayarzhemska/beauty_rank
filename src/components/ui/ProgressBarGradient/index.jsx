import { View } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../../constants/constants';

import { styles } from './style';

export const ProgressBarGradient = ({ progress = 0, height = 6 }) => {
  const stylesSchema = styles();

  return (
    <View style={[stylesSchema.container, { height }]}>
      <LinearGradient
        colors={colors.manBgTopText}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[
          stylesSchema.progressBar,
          { width: `${progress * 100}%`, height },
        ]}
      />
    </View>
  );
};
