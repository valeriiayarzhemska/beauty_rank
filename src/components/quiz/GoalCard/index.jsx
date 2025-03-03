import { useCallback } from 'react';
import { View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { selectIsFullyRegistred } from '../../../store/redux/features/auth/authSelectors';

import { TextComponent } from '../../ui/TextComponent';
import { QuizCardFooter } from '../QuizCardFooter';

import { textStyles } from '../../../constants/constantsStyle';
import { handleNextCardClick } from '../../../utils/utils';

import { styles } from './style';

export const GoalCard = ({
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
  isButtonVisible
}) => {
  const { component = {}, inputs = [] } = item;
  const { title = '', picture = false } = component;

  const stylesSchema = styles();

  const dispatch = useDispatch();
  const isFullyRegistred = useSelector(selectIsFullyRegistred);

  const handleValidation = () => {
    formProps?.validateForm();
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

  return (
    <>
      <View style={stylesSchema.titlesContainer}>
        <TextComponent
          styles={{ ...textStyles.bold, fontSize: 24, textAlign: 'center' }}
        >
          {title}
        </TextComponent>
      </View>

      <QuizCardFooter
        inputs={inputs}
        picture={picture}
        formProps={formProps}
        handleClick={handleClick}
        isScrollInputs={true}
        isFullyRegistred={isFullyRegistred}
        handleValidation={handleValidation}
        isButtonVisible={isButtonVisible}
      />
    </>
  );
};
