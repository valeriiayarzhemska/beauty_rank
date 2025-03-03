import { View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { TextComponent } from '../../ui/TextComponent';

import { textStyles } from '../../../constants/constantsStyle';

import { styles } from './style';

export const CountryItem = ({ item = {}, index }) => {
  const stylesSchema = styles();

  return item?.key && item?.key !== null ? (
    <View style={stylesSchema.row}>
      <View style={[stylesSchema.cell, stylesSchema.place]}>
        <TextComponent styles={{ ...textStyles.regular }}>
          {index + 1}.
        </TextComponent>
      </View>

      <View style={[stylesSchema.cell, stylesSchema.country]}>
        <View style={stylesSchema.iconFlagContainer}>
          <FastImage
            source={{
              uri: `https://flagcdn.com/40x30/${item.key}.png`,
              priority: FastImage.priority.high,
            }}
            style={stylesSchema.image}
          />
        </View>

        <TextComponent styles={{ ...textStyles.regular }}>
          {item.countryName}
        </TextComponent>
      </View>

      <View style={[stylesSchema.cell, stylesSchema.score]}>
        <TextComponent styles={{ ...textStyles.semiBold, textAlign: 'right' }}>
          {item.value?.toString()?.slice(0, 3)}
        </TextComponent>
      </View>
    </View>
  ) : null;
};
