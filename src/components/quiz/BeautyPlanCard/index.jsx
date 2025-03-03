import { useState, useEffect, useCallback, useMemo } from 'react';
import { View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import {
  setHasRanges,
  setInputsProcedures,
} from '../../../store/redux/features/dashboard/dashboardSlice';
import { selectIsUserWoman } from '../../../store/redux/features/dashboard/dashboardSelectors';
import { selectIsFullyRegistred } from '../../../store/redux/features/auth/authSelectors';

import { TextComponent } from '../../ui/TextComponent';
import { QuizCardFooter } from '../QuizCardFooter';
import { Loader } from '../../ui/Loader';

import { textStyles } from '../../../constants/constantsStyle';
import { colors } from '../../../constants/constants';
import { handleNextCardClick } from '../../../utils/utils';
import { beautyValuesNames } from '../../../store/mocks/beauty-plan-quiz-mock';

import { styles } from './style';

export const BeautyPlanCard = ({
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
  const { component = {}, inputs = [] } = item;
  const { title = '', isLeft = false } = component;

  const stylesSchema = styles(isLeft);

  const dispatch = useDispatch();
  const isWoman = useSelector(selectIsUserWoman);
  const isFullyRegistred = useSelector(selectIsFullyRegistred);

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitClick, setIsSubmitClick] = useState(false);
  const [scrollRef, setScrollRef] = useState(null);

  const inputsList = useMemo(() => {
    if (isWoman) return inputs;

    const updatedInputs = inputs.map(input =>
      input.name === beautyValuesNames.procedures
        ? {
            ...input,
            radioListStyle: {
              textStyle: {
                ...textStyles.medium,
                color: colors.purpleColor,
              },
              textColorSelected: colors.whiteColor,
              bgColor: colors.thirdLightPurpleColor,
              bgColorSelected: colors.purpleColor,
            },
          }
        : input
    );

    return updatedInputs;
  }, [isWoman, inputs]);

  const handleValidation = useCallback(() => setIsSubmitClick(true), []);

  const validateInputs = () => {
    if (isSubmitClick && scrollRef?.current) {
      formProps?.validateForm();

      if (!formProps?.values?.[beautyValuesNames.currency]) {
        scrollRef.current.scrollToEnd({ animated: true });
      }

      setIsSubmitClick(false);
    }
  };

  const handleClick = useCallback(
    isInvalid => {
      if (!isInvalid) {
        handleNextCardClick({
          prevIndex,
          index,
          currentIndex,
          dataLength,
          animatedValue,
          handleProgress,
          setZIndex,
          id: item.id,
          formProps,
          setIsReverse,
        });

        dispatch(
          setInputsProcedures(formProps?.values?.[beautyValuesNames.procedures])
        );
      }
    },
    [
      prevIndex,
      index,
      currentIndex,
      dataLength,
      animatedValue,
      handleProgress,
      setZIndex,
      item.id,
      formProps,
      dispatch,
    ]
  );

  useEffect(() => {
    if (isSubmitClick) {
      validateInputs();
    }
  }, [isSubmitClick]);

  useEffect(() => {
    setIsLoading(false);
  }, [inputsList]);

  useEffect(() => {
    dispatch(setHasRanges(false));
    dispatch(setInputsProcedures([]));
    formProps.setErrors({});
  }, [dispatch]);

  return (
    <>
      <View style={stylesSchema.titlesContainer}>
        <TextComponent
          styles={{ ...textStyles.bold, fontSize: 20, textAlign: 'center' }}
        >
          {title}
        </TextComponent>
      </View>

      {isLoading && <Loader />}

      {!isLoading && inputsList.length > 0 && (
        <QuizCardFooter
          inputs={inputsList}
          formProps={formProps}
          handleClick={handleClick}
          isScrollInputs={true}
          isFullyRegistred={isFullyRegistred}
          setScrollRef={setScrollRef}
          handleValidation={handleValidation}
          isButtonVisible={isButtonVisible}
        />
      )}
    </>
  );
};
