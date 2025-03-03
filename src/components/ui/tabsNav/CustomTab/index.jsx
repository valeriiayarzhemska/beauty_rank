import { View } from 'react-native';

import { Stars } from '../../../../assets/icons/Stars';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../../../constants/constants';

import { styles } from './style';

export const CustomTab = () => {
  const stylesSchema = styles();

  return (
    <View style={stylesSchema.shadowContainer}>
      <LinearGradient
        colors={colors.manBgTopText}
        start={{ x: 0.3, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={stylesSchema.roundContainer}
      />

      <View style={stylesSchema.icon}>
        <Stars size={42} />
      </View>
    </View>
  );
};
