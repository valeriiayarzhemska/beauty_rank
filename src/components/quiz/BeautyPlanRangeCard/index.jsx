import { useCallback, useEffect, useMemo, useState } from 'react';
import { ScrollView, View, useWindowDimensions } from 'react-native';
import { withTiming } from 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectHasRanges,
  selectInputsProcedures,
  selectIsUserWoman,
  selectProceduresFromBack,
} from '../../../store/redux/features/dashboard/dashboardSelectors';
import {
  setHasRanges,
  setShowCreateBeautyPlan,
} from '../../../store/redux/features/dashboard/dashboardSlice';
import { selectIsFullyRegistred } from '../../../store/redux/features/auth/authSelectors';

import { TextComponent } from '../../ui/TextComponent';
import { InputsTemplate } from '../../ui/inputs/InputsTemplate';
import { Loader } from '../../ui/Loader';
import { Range } from '../../ui/inputs/InputRange/Range';
import { ButtonNext } from '../ButtonNext';

import { colors, fieldTypes } from '../../../constants/constants';
import {
  lastDateInput,
  priceInput,
  proceduresSteps,
} from '../../../store/mocks/beauty-plan-quiz-mock';
import { textStyles } from '../../../constants/constantsStyle';
import { handleNextCardClick } from '../../../utils/utils';

import {
  transformBeautyProcedureDays,
  transformProceduresFromBack,
} from '../../../utils/utilsData';

import { styles } from './style';
export const BeautyPlanRangeCard = ({
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
  const { scale } = useWindowDimensions();

  const dispatch = useDispatch();
  const proceduresList = useSelector(selectInputsProcedures);
  const proceduresFromBack = useSelector(selectProceduresFromBack);
  const isWoman = useSelector(selectIsUserWoman);
  const hasRanges = useSelector(selectHasRanges);
  const isFullyRegistred = useSelector(selectIsFullyRegistred);

  const [isClicked, setIsClicked] = useState(false);
  const [rangeColor, setRangeColor] = useState(colors.secondPurpleColor);
  const [color, setColor] = useState(colors.secondPurpleColor);
  const [isLoading, setIsLoading] = useState(hasRanges ? false : true);
  const [isValidation, setIsValidation] = useState(false);
  const [errors, setErrors] = useState({});

  const stylesSchema = styles(color, scale, isFullyRegistred);

  const inputsRangeList = useMemo(() => {
    return proceduresList?.length
      ? proceduresList.map(item => {
          let defaultValue = false;

          if (proceduresFromBack?.[item]) {
            defaultValue = transformBeautyProcedureDays(
              proceduresSteps[item].type,
              proceduresFromBack[item].frequency
            );
          }

          return {
            name: `${item}Range`,
            fieldType: fieldTypes.range,
            keyName: item,
            defaultValue,
            ...proceduresSteps[item],
          };
        })
      : [];
  }, [proceduresList]);

  const inputsForRange = useMemo(() => {
    return proceduresList?.length
      ? transformProceduresFromBack(
          proceduresList,
          proceduresFromBack,
          lastDateInput,
          priceInput
        )
      : {};
  }, [proceduresList]);

  const checkValidation = useMemo(() => {
    return Object.entries(inputsForRange).some(([key, inputs]) =>
      inputs.some(
        ({ name }) =>
          !formProps?.values?.[name] || formProps?.values?.[name].length === 0
      )
    );
  }, [inputsForRange, formProps.values]);

  const validateInputs = useCallback(() => {
    const newErrors = {};

    Object.entries(inputsForRange).forEach(([key, inputs]) => {
      inputs.forEach(({ name }) => {
        if (
          !formProps?.values?.[name] ||
          formProps?.values?.[name].length === 0
        ) {
          newErrors[name] = ' ';
        }
      });
    });

    setErrors(newErrors);
  }, [inputsForRange, formProps?.values]);

  const handleClick = useCallback(async () => {
    setIsValidation(true);

    validateInputs();

    if (!checkValidation) {
      try {
        await dispatch(setShowCreateBeautyPlan(true));

        setTimeout(async () => {
          await dispatch(setHasRanges(true));
          setIsClicked(true);

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
        }, 300);
      } catch (error) {
        console.error('Failed to update beauty plan state:', error);
      }
    }
  }, [
    checkValidation,
    validateInputs,
    dispatch,
    formProps,
    index,
    dataLength,
    animatedValue,
    handleProgress,
    setZIndex,
    item.id,
    setIsReverse,
  ]);

  useEffect(() => {
    if (isWoman) {
      setRangeColor(colors.secondPurpleColor);
      setColor(colors.radioItemBg);
    } else {
      setRangeColor(colors.purpleColor);
      setColor(colors.secondPurpleBgColor);
    }
  }, [isWoman]);

  useEffect(() => {
    if (proceduresList?.length) {
      setIsLoading(false);
    }
  }, [proceduresList?.length]);

  useEffect(() => {
    if (isValidation) {
      validateInputs();
    }
  }, [formProps]);

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      formProps.setErrors(errors);
    }
  }, [errors, formProps]);

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={stylesSchema.scrollContainer}
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          scrollEnabled={true}
          nestedScrollEnabled
          // pointerEvents="box-none"
        >
          {isLoading && <Loader />}

          {inputsRangeList && inputsRangeList.length > 0 && !isLoading && (
            <View style={stylesSchema.inputContainer}>
              {inputsRangeList.map((item, index) => {
                const rangeInputs = inputsForRange[item.keyName] || [];

                return (
                  <View
                    style={stylesSchema.container}
                    key={index}
                  >
                    <View style={stylesSchema.containerPadding}>
                      <TextComponent
                        styles={{ ...textStyles.bold, fontSize: 18 }}
                      >
                        {item.title}
                      </TextComponent>
                    </View>

                    <Range
                      formProps={formProps}
                      item={item}
                      isClicked={isClicked}
                      color={rangeColor}
                    />

                    <View style={stylesSchema.containerRow}>
                      <InputsTemplate
                        formProps={formProps}
                        inputsList={rangeInputs}
                        isRow={true}
                      />
                    </View>
                  </View>
                );
              })}
            </View>
          )}
        </ScrollView>
      </GestureHandlerRootView>

      {isButtonVisible && <ButtonNext handleClick={handleClick} />}
    </>
  );
};
