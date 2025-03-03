import React, { useEffect, useRef } from 'react';
import { Animated, View, Image } from 'react-native';

import Logo from '../../assets/images/logo.png';
import { BackgroundWrapper } from '../../components/BackgroundWrapper';

import { styles } from './style';

export const WelcomeLoader = () => {
  const stylesSchema = styles();

  const scaleValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const pulseAnimation = () => {
      scaleValue.setValue(1);
      Animated.timing(scaleValue, {
        toValue: 1.1,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start(pulseAnimation);
      });
    };

    pulseAnimation();

    return () => {};
  }, [scaleValue]);

  return (
    <BackgroundWrapper isBgGradient={true}>
      <View style={stylesSchema.container}>
        <Animated.View
          style={{
            transform: [{ scale: scaleValue }],
          }}
        >
          <View style={stylesSchema.logoWrapper}>
            <Image
              style={stylesSchema.logoImage}
              source={Logo}
            />
          </View>
        </Animated.View>
      </View>
    </BackgroundWrapper>
  );
};
