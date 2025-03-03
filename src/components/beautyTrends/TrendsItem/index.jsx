import { Image, TouchableOpacity, View } from 'react-native';

import { TextComponent } from '../../ui/TextComponent';

import { textStyles } from '../../../constants/constantsStyle';

import { styles } from './style';

export const TrendsItem = ({ item = {}, handleClick = () => {} }) => {
  const stylesSchema = styles();

  const { title, link, image } = item;

  return (
    <TouchableOpacity
      style={stylesSchema.container}
      onPress={() => handleClick(link)}
    >
      <View style={stylesSchema.content}>
        <View style={stylesSchema.imageContainer}>
          <Image
            source={image}
            style={stylesSchema.image}
          />
        </View>

        <TextComponent
          styles={{ ...textStyles.bold, fontSize: 20, textAlign: 'center' }}
        >
          {title}
        </TextComponent>
      </View>
    </TouchableOpacity>
  );
};
