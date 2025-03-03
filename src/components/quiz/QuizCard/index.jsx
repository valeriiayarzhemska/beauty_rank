import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import Animated, {
  useAnimatedStyle,
  interpolate,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';

import { handleBackCardClick } from '../../../utils/utils';

import { styles } from './style';

export const QuizCard = forwardRef(
  (
    {
      navigation,
      formProps,
      maxVisibleItems,
      item,
      index,
      dataLength,
      animatedValue,
      currentIndex,
      prevIndex,
      handleProgress,
      cardHeight = 500,
      componentCard,
      handleSubmit,
      cards,
      setCards,
      handleBack,
      backButtonRef,
    },
    ref
  ) => {
    const { component = {} } = item;
    const { isLeft = false } = component;

    const stylesSchema = styles(isLeft);

    const [zIndex, setZIndex] = useState(dataLength - index);
    const [isVisible, setIsVisible] = useState(true);
    const [isReverse, setIsReverse] = useState(false);
    const [canClick, setCanClick] = useState(false);

    const CONTAINER_WIDTH = '100%';
    const CONTAINER_HEIGHT = cardHeight;
    const Card = componentCard;

    const animatedStyle = useAnimatedStyle(() => {
      const translateY = interpolate(
        animatedValue.value,
        [index - 1, index, index + 1],
        [32, 1, 30]
      );
      const translateY2 = interpolate(
        animatedValue.value,
        [index - 1, index, index + 1],
        [-200, 1, 200]
      );
      const scale = interpolate(
        animatedValue.value,
        [index - 1, index, index + 1],
        [0.94, 1, 1.1]
      );
      const opacity = isReverse
        ? interpolate(
            animatedValue.value,
            [index - 1, index, index + 1],
            [0.8, 1, 0]
          )
        : interpolate(
            animatedValue.value,
            [index - 1, index, index + 1],
            [0.8, 1, 0]
          );

      if (opacity === 0 && currentIndex.value > index) {
        runOnJS(setIsVisible)(false);
        runOnJS(setCanClick)(false);
      } else if (index === currentIndex.value) {
        runOnJS(setIsVisible)(true);
        runOnJS(setCanClick)(true);
      }

      return {
        transform: [
          {
            translateY: translateY,
          },
          { scale },
        ],
        opacity:
          index < currentIndex.value + maxVisibleItems
            ? opacity
            : index === currentIndex.value + maxVisibleItems - 1
            ? withTiming(1)
            : withTiming(0),
      };
    });

    const pointerEvents = canClick && isVisible ? 'box-none' : 'none';

    const handleCards = () => {
      setCards(prevCards => ({
        ...prevCards,
        [index]: {
          setIsVisible,
          setCanClick,
          setIsReverse,
          setZIndex,
          zIndex,
        },
      }));
    };

    const handleBackClick = useCallback(() => {
      handleBackCardClick({
        prevIndex,
        cards,
        currentIndex,
        animatedValue,
        handleProgress,
      });
    }, [prevIndex, cards, currentIndex, animatedValue, handleProgress]);

    useImperativeHandle(backButtonRef, () => {
      return { handleBackClick };
    });

    useEffect(() => {
      handleCards();
    }, []);

    useEffect(() => {
      setZIndex(dataLength - index);
    }, []);

    return isVisible ? (
      <Animated.View
        style={[
          stylesSchema.container,
          {
            zIndex: zIndex,
            width: CONTAINER_WIDTH,
            height: CONTAINER_HEIGHT,
          },
          animatedStyle,
        ]}
        pointerEvents={pointerEvents}
      >
        <Card
          navigation={navigation}
          formProps={formProps}
          item={item}
          index={index}
          dataLength={dataLength}
          animatedValue={animatedValue}
          currentIndex={currentIndex}
          prevIndex={prevIndex}
          handleProgress={handleProgress}
          setZIndex={setZIndex}
          handleSubmit={handleSubmit}
          cards={cards}
          setIsReverse={setIsReverse}
          handleBack={handleBack}
          backButtonRef={backButtonRef}
          isVisible={isVisible}
          isButtonVisible={isVisible && canClick}
        />
      </Animated.View>
    ) : null;
  }
);
