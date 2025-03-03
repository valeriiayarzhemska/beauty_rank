import { useEffect, useRef } from 'react';
import { View, Animated } from 'react-native';

import Sparkle from '../../../assets/images/little-sparkle.png';

import { styles } from './style';

const sparklePositions = [
  { top: '10%', left: '20%', delay: 0 },
  { top: '30%', left: '-20', delay: 1000 },
  { top: '70%', left: '92%', delay: 2000 },
  { top: '96%', left: '15%', delay: 3000 },
  { top: '50%', left: '85%', delay: 4000 },
  { top: '5%', left: '20%', delay: 0 },
  { top: '12%', left: '92%', delay: 1000 },
  { top: '43%', left: '80%', delay: 2000 },
  { top: '60%', left: '-8', delay: 3000 },
  { top: '20%', left: '10%', delay: 4000 },
  { top: '40%', left: '24%', delay: 4000 },
];

const sparkleSmallPositions = [
  { top: '15%', left: '10%', delay: 2000 },
  { top: '25%', left: '40%', delay: 1000 },
  { top: '65%', left: '75%', delay: 0 },
  { top: '80%', left: '20%', delay: 3000 },
  { top: '45%', left: '60%', delay: 4000 },
  { top: '10%', left: '70%', delay: 2500 },
  { top: '35%', left: '90%', delay: 1500 },
  { top: '55%', left: '-4', delay: 500 },
  { top: '90%', left: '-10', delay: 3500 },
  { top: '40%', left: '85%', delay: 4500 },
  { top: '50%', left: '30%', delay: 4500 },
  { top: '60%', left: '35%', delay: 4500 },
];

export const AnimatedSparkles = ({ height = 324 }) => {
  const stylesSchema = styles(height);

  const opacityAnimations = useRef(
    sparklePositions.map(() => new Animated.Value(0))
  ).current;

  useEffect(() => {
    sparklePositions.forEach((_, index) => {
      Animated.loop(
        Animated.sequence([
          Animated.delay(sparklePositions[index].delay),
          Animated.timing(opacityAnimations[index], {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(opacityAnimations[index], {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
        ])
      ).start();
    });
  }, [opacityAnimations]);

  return (
    <View style={stylesSchema.container}>
      {sparklePositions.map((position, index) => (
        <Animated.Image
          key={index}
          source={Sparkle}
          style={[
            stylesSchema.sparkle,
            {
              top: position.top,
              left: position.left,
              opacity: opacityAnimations[index],
            },
          ]}
        />
      ))}

      {sparkleSmallPositions.map((position, index) => (
        <Animated.Image
          key={index}
          source={Sparkle}
          style={[
            stylesSchema.sparkleSmall,
            {
              top: position.top,
              left: position.left,
              opacity: opacityAnimations[index],
            },
          ]}
        />
      ))}
    </View>
  );
};
