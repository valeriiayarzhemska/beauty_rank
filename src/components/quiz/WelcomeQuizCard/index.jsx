import { useCallback, useMemo } from 'react';
import { Image, View } from 'react-native';
import { withTiming } from 'react-native-reanimated';

import { useDispatch } from 'react-redux';
import {
  setIsUserWoman,
  setRegistrationQuizValues,
} from '../../../store/redux/features/dashboard/dashboardSlice';

import { QuizCardFooter } from '../QuizCardFooter';
import { TextComponent } from '../../ui/TextComponent';

import { colors } from '../../../constants/constants';
import { textStyles } from '../../../constants/constantsStyle';
import { handleNextCardClick } from '../../../utils/utils';
import { valuesNames } from '../../../store/mocks/registration-quiz-mock';

import { styles } from './style';

export const WelcomeQuizCard = ({
  navigation,
  formProps,
  item,
  index,
  dataLength,
  animatedValue,
  currentIndex,
  prevIndex,
  setZIndex,
  handleProgress,
  setIsReverse,
  isButtonVisible,
}) => {
  const { component = {}, input = {} } = item;
  const {
    pictures = [],
    picture = null,
    title = '',
    subtitle = '',
    description = '',
    isLeft = false,
    hasName = false,
  } = component;
  const { name = '' } = input;

  const stylesSchema = styles(isLeft);

  const dispatch = useDispatch();

  const inputs = useMemo(() => [input], [input]);

  const handleValidation = () => {
    formProps?.validateField(name);
  };

  const navigateToNextScreen = useCallback(() => {
    if (formProps?.values?.[valuesNames.Gender] === 0) {
      dispatch(setIsUserWoman(false));
    } else {
      dispatch(setIsUserWoman(true));
    }

    navigation.navigate('WelcomeSelfCare');
  }, [dispatch, formProps, navigation]);

  const handleClick = useCallback(() => {
    handleNextCardClick({
      prevIndex,
      index,
      currentIndex,
      dataLength,
      animatedValue,
      withTiming,
      handleProgress,
      setZIndex,
      id: item.id,
      formProps,
      setIsReverse,
    });

    if (item.id === dataLength) {
      dispatch(setRegistrationQuizValues(formProps?.values));
      navigateToNextScreen();
    }
  }, [
    prevIndex,
    index,
    currentIndex,
    dataLength,
    animatedValue,
    handleProgress,
    setZIndex,
    item.id,
    formProps,
    formProps?.values,
    dispatch,
    navigateToNextScreen,
  ]);

  return (
    <>
      <View style={stylesSchema.titlesContainer}>
        {hasName && (
          <TextComponent styles={{ ...textStyles.semiBold, fontSize: 18 }}>
            Hi {formProps?.values?.[valuesNames.Name]},
          </TextComponent>
        )}

        <TextComponent styles={{ ...textStyles.bold, fontSize: 24 }}>
          {title}
        </TextComponent>

        {subtitle && (
          <TextComponent styles={{ ...textStyles.semiBold, fontSize: 18 }}>
            {subtitle}
          </TextComponent>
        )}

        {description && (
          <TextComponent
            styles={{
              ...textStyles.bold,
              fontSize: 18,
              color: colors.darkGrayColor,
            }}
          >
            {description}
          </TextComponent>
        )}
      </View>

      {pictures && pictures.length > 0 && (
        <View style={stylesSchema.imagesWrapper}>
          {pictures.map((itemPicture, pictureIndex) => {
            return (
              <View
                key={pictureIndex}
                style={stylesSchema.imagesContainer}
              >
                <Image
                  source={itemPicture}
                  style={stylesSchema.image}
                />
              </View>
            );
          })}
        </View>
      )}

      {picture && (
        <View style={stylesSchema.imageContainer}>
          <Image
            source={picture}
            style={stylesSchema.image}
          />
        </View>
      )}

      {inputs && inputs.length > 0 && (
        <QuizCardFooter
          inputs={inputs}
          formProps={formProps}
          handleClick={handleClick}
          handleValidation={handleValidation}
          isButtonVisible={isButtonVisible}
        />
      )}
    </>
  );
};
