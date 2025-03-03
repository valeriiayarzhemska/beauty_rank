import { useEffect, useRef } from 'react';
import { Image, ScrollView, useWindowDimensions, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { InputsTemplate } from '../../ui/inputs/InputsTemplate';
import { ButtonNext } from '../ButtonNext';

import { styles } from './style';

export const QuizCardFooter = ({
  inputs = [],
  formProps = {},
  handleClick = false,
  isScrollInputs = false,
  setScrollRef = () => {},
  handleValidation = false,
  isFullyRegistred = false,
  picture = false,
  isButtonVisible = true,
}) => {
  const { scale } = useWindowDimensions();
  const Picture = picture;

  const stylesSchema = styles(isScrollInputs, scale, isFullyRegistred, picture);

  const scrollRef = useRef();

  const checkValidation = inputs.some(input => {
    if (
      formProps?.values?.[input.name] === 0 ||
      formProps?.values?.[input.name] === false
    ) {
      return false;
    } else {
      return (
        !formProps?.values?.[input.name] ||
        formProps?.values?.[input.name]?.length === 0
      );
    }
  });

  const handleClickNext = async () => {
    const isInvalid = checkValidation;

    if (handleValidation) {
      handleValidation();
    }

    if (handleClick && !isInvalid) {
      handleClick();
    }
  };

  useEffect(() => {
    if (isScrollInputs) {
      setScrollRef(scrollRef);
    }
  }, [scrollRef, isScrollInputs]);

  return (
    <>
      {isScrollInputs ? (
        <GestureHandlerRootView style={{ flex: 1 }}>
          <ScrollView
            ref={scrollRef}
            style={stylesSchema.inputContainer}
            contentContainerStyle={stylesSchema.scrollContainer}
            keyboardShouldPersistTaps="handled"
            nestedScrollEnabled
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
          >
            {picture && (
              <View style={stylesSchema.imageContainer}>
                <Image
                  source={Picture}
                  style={stylesSchema.image}
                />
              </View>
            )}

            <InputsTemplate
              formProps={formProps}
              inputsList={inputs}
            />
          </ScrollView>
        </GestureHandlerRootView>
      ) : (
        <View
          style={stylesSchema.inputContainer}
          pointerEvents="box-none"
        >
          <InputsTemplate
            formProps={formProps}
            inputsList={inputs}
          />
        </View>
      )}

      {isButtonVisible && (
        <ButtonNext
          handleClick={handleClickNext}
          // checkValidation={checkValidation}
        />
      )}
    </>
  );
};
