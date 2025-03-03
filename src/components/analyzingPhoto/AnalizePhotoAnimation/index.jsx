import { useEffect, useRef } from 'react';
import { Image, View, Animated } from 'react-native';
import FastImage from 'react-native-fast-image';

import { useSelector } from 'react-redux';
import { selectPhotoToAnalize } from '../../../store/redux/features/dashboard/dashboardSelectors';

import LinearGradient from 'react-native-linear-gradient';
import Progress from '../../../assets/images/analize-progress.png';
import RedCross from '../../../assets/images/red-cross.png';
import Refresh from '../../../assets/images/refresh.png';
import { CheckGradient } from '../../../assets/icons/CheckGradient';

import { styles } from './style';

export const AnalizePhotoAnimation = ({
  isSuccess = false,
  isError = false,
  handleRefresh = () => {},
  setIsAnimationFinished = () => {},
}) => {
  const stylesSchema = styles();

  const userPhotoToAnalize = useSelector(selectPhotoToAnalize);

  const progressBottom = useRef(new Animated.Value(-290)).current;
  const gradientOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(progressBottom, {
        toValue: 30,
        duration: 5000,
        useNativeDriver: false,
      }),
      Animated.timing(gradientOpacity, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: false,
      }),
    ]).start(() => {
      setIsAnimationFinished(true);
    });
  }, []);

  return (
    <>
      <View style={stylesSchema.imageContainer}>
        <FastImage
          source={{ uri: userPhotoToAnalize?.uri }}
          style={stylesSchema.image}
          resizeMode={FastImage.resizeMode.cover}
        />

        <View style={[stylesSchema.corner, stylesSchema.topLeft]} />

        <View style={[stylesSchema.corner, stylesSchema.topRight]} />

        <View style={[stylesSchema.corner, stylesSchema.bottomLeft]} />

        <View style={[stylesSchema.corner, stylesSchema.bottomRight]} />

        <Animated.View
          style={[stylesSchema.progressContainer, { bottom: progressBottom }]}
        >
          <View style={stylesSchema.progressBorder}></View>

          <FastImage
            source={Progress}
            style={stylesSchema.imageProgress}
          />
        </Animated.View>

        <Animated.View
          style={[stylesSchema.gradientContainer, { opacity: gradientOpacity }]}
        >
          <LinearGradient
            colors={['rgba(128, 0, 200, 0.1)', 'rgba(129, 179, 255, 0.7)']}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={stylesSchema.gradientContainerInner}
          >
            <View style={stylesSchema.imageContainer}></View>
          </LinearGradient>
        </Animated.View>

        <View style={stylesSchema.iconsContainer}>
          {isSuccess && <CheckGradient />}

          {isError && (
            <>
              <View style={stylesSchema.crossContainer}>
                <FastImage
                  source={RedCross}
                  style={stylesSchema.icon}
                />
              </View>

              <View style={stylesSchema.refreshContainer}>
                <FastImage
                  source={Refresh}
                  style={stylesSchema.icon}
                />
              </View>
            </>
          )}
        </View>
      </View>
    </>
  );
};
