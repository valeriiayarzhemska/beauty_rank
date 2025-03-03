import { useEffect, useRef } from 'react';
import { Animated, Image } from 'react-native';

import { styles } from './style';

const X_RADIUS = 150; // Horizontal radius
const Y_RADIUS = 210; // Vertical radius

export const WelcomeCard = ({ image, position, index }) => {
  const stylesSchema = styles();

  const animatedValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 500,
      delay: index * 250,
      useNativeDriver: true,
    }).start();

    if (index === 6) {
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 500,
        delay: index * 250,
        useNativeDriver: true,
      }).start();
    }
  }, [animatedValue, index, scaleValue]);

  const rotate = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0rad', `${Math.PI * 2}rad`],
  });

  const scale = scaleValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const finalTranslateX = X_RADIUS * Math.cos(position);
  const finalTranslateY = Y_RADIUS * Math.sin(position);

  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <>
      {index !== 6 && (
        <Animated.View
          style={[
            stylesSchema.card,
            {
              transform: [
                { translateX: finalTranslateX },
                { translateY: finalTranslateY },
              ],
              opacity,
            },
          ]}
        >
          <Image
            style={stylesSchema.image}
            source={image}
          />
        </Animated.View>
      )}

      {index === 6 && (
        <Animated.View
          style={[
            stylesSchema.centerCard,
            {
              transform: [{ scale }],
            },
          ]}
        >
          <Image
            style={stylesSchema.image}
            source={image}
          />
        </Animated.View>
      )}
    </>
  );
};
