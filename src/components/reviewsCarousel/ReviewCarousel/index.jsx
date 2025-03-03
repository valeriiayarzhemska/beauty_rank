import { View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import LinearGradient from 'react-native-linear-gradient';

import { ReviewCarouselItem } from '../ReviewCarouselItem';

import { reviews } from '../../../constants/constantsUI';

import { styles } from './style';

export const ReviewCarousel = () => {
  const height = 202;

  const stylesSchema = styles(height);

  return (
    <View style={stylesSchema.container}>
      <Carousel
        loop
        width={150}
        height={height}
        autoPlay
        style={stylesSchema.carouselContainer}
        scrollAnimationDuration={1000}
        data={reviews}
        snapEnabled={true}
        renderItem={({ item, index }) => (
          <ReviewCarouselItem
            key={item.id}
            item={item}
          />
        )}
      />

      <LinearGradient
        colors={['#966FDA', 'rgba(150, 111, 218, 0)']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={[stylesSchema.gradient, stylesSchema.leftGradient]}
      />

      <LinearGradient
        colors={['rgba(150, 111, 218, 0)', '#966FDA']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={[stylesSchema.gradient, stylesSchema.rightGradient]}
      />
    </View>
  );
};
