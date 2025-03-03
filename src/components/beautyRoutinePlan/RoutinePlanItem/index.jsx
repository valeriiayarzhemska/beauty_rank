import { useEffect, useRef } from 'react';
import { Animated, View, Image } from 'react-native';

import { TextComponent } from '../../ui/TextComponent';
import Check from '../../../assets/images/check-white-bg.png';

import { textStyles } from '../../../constants/constantsStyle';
import { colors } from '../../../constants/constants';
import { beautyPlanFinishData } from '../../../constants/constantsUI';

import { styles } from './style';
import { setShowCreateBeautyPlan } from '../../../store/redux/features/dashboard/dashboardSlice';
import { useDispatch } from 'react-redux';

export const RoutinePlanItem = ({
  navigation,
  item = {},
  index,
  delay = 700,
}) => {
  const stylesSchema = styles();

  const dispatch = useDispatch();

  const opacity = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1500,
      delay: index * delay,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished && index === beautyPlanFinishData.length - 1) {
        dispatch(setShowCreateBeautyPlan(false));
        // navigation.navigate('BeautyPlan', { isDates: true });
      }
    });
  }, [opacity, index, delay, navigation]);

  return (
    <Animated.View style={[stylesSchema.itemContainer, { opacity }]}>
      <View style={stylesSchema.itemImageContainer}>
        <Image
          style={stylesSchema.image}
          source={Check}
        />
      </View>

      <TextComponent
        styles={{
          ...textStyles.bold,
          fontSize: 16,
          color: colors.whiteColor,
        }}
      >
        {item}
      </TextComponent>
    </Animated.View>
  );
};
