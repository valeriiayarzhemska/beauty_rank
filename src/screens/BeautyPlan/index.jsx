import { useEffect, useState } from 'react';
import { Animated } from 'react-native';

import { useSelector } from 'react-redux';
import { selectShowCreateBeautyPlan } from '../../store/redux/features/dashboard/dashboardSelectors';

import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { BeautyPlanForm } from '../../components/ui/forms/BeautyPlanForm';
import { BeautyPlanFinish } from '../BeautyPlanFinish';

import { styles } from './style';

export const BeautyPlan = ({ navigation, route }) => {
  const stylesSchema = styles();

  const showCreateBeautyPlan = useSelector(selectShowCreateBeautyPlan);

  const [isVisible, setIsVisible] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const startAnimation = () => {
    setIsVisible(true);
    Animated.timing(animation, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const hideAnimation = () => {
    Animated.timing(animation, {
      toValue: 2,
      duration: 400,
      useNativeDriver: true,
    }).start(() => {
      setIsVisible(false);
      animation.setValue(0);
    });
  };

  const translateX = animation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [1000, 0, -1000],
  });

  useEffect(() => {
    if (showCreateBeautyPlan) {
      setIsVisible(true);
      startAnimation();
    } else {
      hideAnimation();
    }
  }, [showCreateBeautyPlan]);

  return (
    <>
      <BackgroundWrapper isBgGradient={true}>
        <BeautyPlanForm
          navigation={navigation}
          hasProgressBar={route?.params?.isProfile ? false : true}
        />
      </BackgroundWrapper>

      {isVisible && (
        <Animated.View
          style={[
            stylesSchema.finishContainer,
            { transform: [{ translateX }] },
          ]}
        >
          <BeautyPlanFinish />
        </Animated.View>
      )}
    </>
  );
};
