import { View } from 'react-native';

import LottieView from 'lottie-react-native';

import { styles } from './style';

export const LoaderBar = ({ height }) => {
  const stylesSchema = styles(height);

  return (
    <View style={stylesSchema.container}>
      <LottieView
        source={require('./animation.json')}
        autoPlay
        loop={false}
        style={stylesSchema.animation}
      />
    </View>
  );
};
