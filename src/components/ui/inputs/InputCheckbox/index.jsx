import { useRef, useState } from 'react';
import { View } from 'react-native';
import CheckBox from 'react-native-check-box';

import { InputCheckboxTerms } from '../InputCheckboxTerms';

import { styles } from './style';

export const InputCheckbox = ({
  formProps,
  icon,
  placeholder,
  name,
  isTerms = false,
}) => {
  const stylesSchema = styles();

  const [isChecked, setIsChecked] = useState(false);

  const inputRef = useRef();

  const handleCheck = async () => {
    const checked = !isChecked;

    await setIsChecked(checked);
    await formProps?.setFieldValue(name, checked);
  };

  return (
    <>
      <View style={stylesSchema.container}>
        <View style={stylesSchema.containerCheckbox}>
          {isChecked && (
            <View style={stylesSchema.containerCheckboxChecked}></View>
          )}
        </View>

        <CheckBox
          ref={inputRef}
          name={name}
          checkBoxColor={'transparent'}
          style={[stylesSchema.input]}
          maxFontSizeMultiplier={1}
          rightText={placeholder}
          rightTextStyle={[
            stylesSchema.inputDefault,
            formProps?.errors?.[name] &&
            Object.keys(formProps.errors[name]).length > 0
              ? stylesSchema.errorInput
              : stylesSchema.inputText,
          ]}
          onClick={handleCheck}
          isChecked={isChecked}
        />

        {isTerms && (
          <InputCheckboxTerms
            formProps={formProps}
            name={name}
            handleCheck={handleCheck}
          />
        )}
      </View>
    </>
  );
};
