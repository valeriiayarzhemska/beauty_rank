import { Platform } from 'react-native';
import { BlurView } from '@react-native-community/blur';

import { styles } from './style';
import { colors } from '../../../constants/constants';

export const BlurBg = ({ blurAndroid = 14, blurIos = 3, children }) => {
  const stylesSchema = styles();

  return (
    <BlurView
      style={stylesSchema.blurBackground}
      blurType="light"
      blurAmount={Platform.OS === 'android' ? blurAndroid : blurIos}
      reducedTransparencyFallbackColor={colors.whiteColor}
    >
      {children}
    </BlurView>
  );
};
