import { useCallback, useEffect, useState } from 'react';
import { Image, useWindowDimensions, View } from 'react-native';
import { withTiming } from 'react-native-reanimated';

import { useSelector } from 'react-redux';
import {
  selectIsSkipVisible,
  selectIsUserWoman,
} from '../../../store/redux/features/dashboard/dashboardSelectors';

import WomanInstagram from '../../../assets/images/instagram.png';
import ManInstagram from '../../../assets/images/man-instagram.png';
import Crown from '../../../assets/images/crown.png';

import { TextComponent } from '../../ui/TextComponent';
import { QuizCardFooter } from '../QuizCardFooter';

import { colors, fieldTypes } from '../../../constants/constants';
import { textStyles } from '../../../constants/constantsStyle';
import { handleNextCardClick } from '../../../utils/utils';
import { valuesNamesInstagram } from '../../../store/mocks/share-instagram-mock';

import { styles } from './style';

export const ShareInstagramCard = ({
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
  handleSubmit,
  setIsReverse,
  isButtonVisible,
}) => {
  const { scale } = useWindowDimensions();

  const { component = {}, input = {} } = item;
  const {
    picture = null,
    pictureSize = false,
    title = '',
    warning = '',
  } = component;

  const stylesSchema = styles(pictureSize, scale);

  const isWoman = useSelector(selectIsUserWoman);
  const isSkip = useSelector(selectIsSkipVisible);

  const [inputs, setInputs] = useState([input]);
  const [isWarningVisible, setIsWarningVisible] = useState(false);

  const handleValidation = () => {
    formProps?.validateField(input.name);
  };

  const handleInputsColor = () => {
    if (!isWoman && input.fieldType === fieldTypes.radioList) {
      const newInput = {
        ...input,
        radioListStyle: {
          textStyle: { ...textStyles.medium, color: colors.purpleColor },
          textColorSelected: colors.whiteColor,
          bgColor: colors.thirdLightPurpleColor,
          bgColorSelected: colors.purpleColor,
        },
      };

      setInputs([newInput]);
    } else if (isWoman && input.fieldType === fieldTypes.radioList) {
      setInputs([input]);
    }
  };

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

    if (item.id === 2) {
      handleSubmit(formProps);
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
  ]);

  useEffect(() => {
    setIsWarningVisible(
      formProps?.values?.[valuesNamesInstagram.Consent] === false
    );
  }, [formProps?.values?.[valuesNamesInstagram.Consent]]);

  useEffect(() => {
    setInputs([input]);
  }, [item]);

  useEffect(() => {
    handleInputsColor();
  }, [isWoman]);

  useEffect(() => {
    if (!isSkip && input?.name === valuesNamesInstagram.Instagram) {
      handleClick();
    }
  }, [isSkip]);

  return (
    <>
      <View style={stylesSchema.titlesContainer}>
        <TextComponent
          styles={{ ...textStyles.bold, fontSize: 24, textAlign: 'center' }}
        >
          {title}
        </TextComponent>
      </View>

      {picture && (
        <View style={stylesSchema.imageContainer}>
          <Image
            source={picture}
            style={stylesSchema.image}
          />
        </View>
      )}

      {input?.name === valuesNamesInstagram.Instagram && (
        <View style={stylesSchema.imageContainer}>
          <Image
            source={isWoman ? WomanInstagram : ManInstagram}
            style={stylesSchema.image}
          />

          <View style={stylesSchema.iconContainer}>
            <Image
              source={Crown}
              style={stylesSchema.image}
            />
          </View>
        </View>
      )}

      <QuizCardFooter
        inputs={inputs}
        formProps={formProps}
        handleClick={handleClick}
        handleValidation={handleValidation}
        isButtonVisible={isButtonVisible}
      />

      {warning && isWarningVisible && (
        <View style={stylesSchema.warningContainer}>
          <TextComponent
            styles={{
              ...textStyles.semiBold,
              fontSize: 12,
              color: colors.redColor,
              textAlign: 'center',
            }}
          >
            {warning}
          </TextComponent>
        </View>
      )}
    </>
  );
};
