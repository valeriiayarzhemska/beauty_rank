import { View, Image } from 'react-native';

import { Star } from '../../../assets/icons/Star';
import { PurpleCheck } from '../../../assets/icons/PurpleCheck';

import { TextComponent } from '../../ui/TextComponent';

import { colors } from '../../../constants/constants';
import { textStyles } from '../../../constants/constantsStyle';

import { styles } from './style';

export const ReviewCarouselItem = ({ item = {} }) => {
  const stylesSchema = styles();

  const { name, text, image } = item;

  return (
    <View style={stylesSchema.container}>
      <View style={stylesSchema.header}>
        <View style={stylesSchema.imageContainer}>
          <Image
            source={image}
            style={stylesSchema.image}
          />
        </View>

        <View style={stylesSchema.titles}>
          <TextComponent
            styles={{
              ...textStyles.bold,
            }}
          >
            {name}
          </TextComponent>

          <View style={stylesSchema.verified}>
            <PurpleCheck />

            <TextComponent
              styles={{
                ...textStyles.bold,
                textAlign: 'center',
                fontSize: 10,
                color: colors.purpleColor,
                marginLeft: 4,
              }}
            >
              Verified
            </TextComponent>
          </View>
        </View>
      </View>

      <View style={stylesSchema.ratingContainer}>
        <View style={stylesSchema.rating}>
          {[...Array(5).keys()].map(item => {
            return <Star />;
          })}
        </View>

        <TextComponent
          styles={{
            ...textStyles.regular,
            fontSize: 10,
            color: colors.grayColor,
          }}
        >
          5.0 rating
        </TextComponent>
      </View>

      <TextComponent
        styles={{
          ...textStyles.medium,
          fontSize: 14,
        }}
      >
        {text}
      </TextComponent>
    </View>
  );
};
