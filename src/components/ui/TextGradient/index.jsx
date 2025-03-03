import MaskedView from '@react-native-masked-view/masked-view';
import { Platform, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { styles } from './style';

export const TextGradient = ({
  colors = ['#8A6EDA', '#A16EDA', '#BE72DD', '#EBB1EB'],
  ...rest
}) => {
  const stylesSchema = styles();

  return Platform.OS === 'android' ? (
    <MaskedView maskElement={<Text {...rest} />}>
      <LinearGradient
        colors={colors}
        locations={[-0.0205, 0.4712, 0.7171, 0.963]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      >
        <Text
          {...rest}
          maxFontSizeMultiplier={1}
          style={[rest.style, { opacity: 0 }]}
        />
      </LinearGradient>
    </MaskedView>
  ) : (
    <MaskedView
      style={[stylesSchema.maskedView, rest?.maskStyles ? rest.maskStyles : {}]}
      maskElement={
        <View style={stylesSchema.maskWrapper}>
          <Text style={rest.style}>{rest.children}</Text>
        </View>
      }
    >
      <LinearGradient
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
        locations={[0.0205, 0.4712, 0.7171, 0.963]}
        colors={colors}
        style={stylesSchema.image}
      />
    </MaskedView>
  );
};
