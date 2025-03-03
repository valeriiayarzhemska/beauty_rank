import { useEffect, useRef } from 'react';
import { View, Image, ScrollView, Animated } from 'react-native';

import { useSelector } from 'react-redux';
import { selectIsFullyRegistred } from '../../store/redux/features/auth/authSelectors';

import Woman from '../../assets/images/beauty-plan.png';
import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { RoutinePlanList } from '../../components/beautyRoutinePlan/RoutinePlanList';
import { TextComponent } from '../../components/ui/TextComponent';

import { textStyles } from '../../constants/constantsStyle';
import { colors } from '../../constants/constants';

import { styles } from './style';

export const BeautyPlanFinish = ({ navigation }) => {
  const isFullyRegistred = useSelector(selectIsFullyRegistred);

  const stylesSchema = styles(isFullyRegistred);

  const dot1Y = useRef(new Animated.Value(0)).current;
  const dot2Y = useRef(new Animated.Value(0)).current;
  const dot3Y = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const createDotAnimation = animatedValue => {
      return Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: -10,
          duration: 260,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 260,
          useNativeDriver: true,
        }),
      ]);
    };

    Animated.loop(
      Animated.sequence([
        createDotAnimation(dot1Y),
        Animated.delay(80),
        createDotAnimation(dot2Y),
        Animated.delay(80),
        createDotAnimation(dot3Y),
        Animated.delay(260),
      ])
    ).start();
  }, [dot1Y, dot2Y, dot3Y]);

  return (
    <BackgroundWrapper isBgGradient={true}>
      <View style={stylesSchema.contentContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={stylesSchema.container}
        >
          <View style={stylesSchema.imageContainer}>
            <Image
              style={stylesSchema.image}
              source={Woman}
            />
          </View>

          <View style={stylesSchema.titleContainer}>
            <TextComponent
              styles={{
                ...textStyles.bold,
                fontSize: 24,
                textAlign: 'center',
                color: colors.whiteColor,
              }}
            >
              Creating your personalized beauty routine plan
              <View style={stylesSchema.dotsContainer}>
                <Animated.View
                  style={[
                    stylesSchema.dot,
                    { transform: [{ translateY: dot1Y }] },
                  ]}
                />
                <Animated.View
                  style={[
                    stylesSchema.dot,
                    { transform: [{ translateY: dot2Y }] },
                  ]}
                />
                <Animated.View
                  style={[
                    stylesSchema.dot,
                    { transform: [{ translateY: dot3Y }] },
                  ]}
                />
              </View>
            </TextComponent>
          </View>

          <RoutinePlanList navigation={navigation} />
        </ScrollView>
      </View>
    </BackgroundWrapper>
  );
};
