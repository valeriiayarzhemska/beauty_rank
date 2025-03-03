import { View } from 'react-native';

import { StarGradient } from '../../assets/icons/StarGradient';
import { TextComponent } from '../ui/TextComponent';

import { featuresSubscription } from '../../constants/constantsUI';

import { styles } from './style';

export const SubscriptionFeatures = ({ navigation }) => {
  const stylesSchema = styles();

  return (
    <View style={stylesSchema.container}>
      {featuresSubscription.map((item, index) => {
        return (
          <View
            key={index}
            style={
              index === featuresSubscription.length - 1
                ? stylesSchema.feature
                : [stylesSchema.feature, stylesSchema.featureBorder]
            }
          >
            <StarGradient />

            <View style={stylesSchema.feautureText}>
              <TextComponent>{item}</TextComponent>
            </View>
          </View>
        );
      })}
    </View>
  );
};
