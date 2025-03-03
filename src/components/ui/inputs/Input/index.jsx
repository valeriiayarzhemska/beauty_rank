import { useEffect, useRef, useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

import { Eye } from '../../../../assets/icons/Eye';
import { colors } from '../../../../constants/constants';

import { defaultInputStyles } from '../../../../constants/constantsStyle';

import { styles } from './style';

export const Input = ({
  formProps,
  label,
  icon,
  placeholder,
  name,
  isSquare = false,
  isNumber = false,
  isReadOnly = false,
  isLabelHidden = false,
  type,
  defaultValue = false,
}) => {
  const stylesSchema = styles(isSquare, icon);

  const [isFocused, setIsFocused] = useState(false);
  const [isLabelShown, setIsLabelShown] = useState(false);
  const [isSecureActive, setIsSecureActive] = useState(true);
  const [paddingStyles, setPaddingStyles] = useState({});

  const inputRef = useRef();
  const Icon = icon;
  const Label = label;

  const isSecure = type === 'password';
  const inputStyles =
    placeholder && !isLabelHidden
      ? isSquare
        ? defaultInputStyles.containerSquare
        : defaultInputStyles.container
      : defaultInputStyles.containerWithoutLabel;
  const inputPaddingStyles =
    placeholder && !isLabelHidden
      ? isSquare
        ? defaultInputStyles.containerSquarePadding
        : defaultInputStyles.containerPadding
      : defaultInputStyles.containerWithoutLabelPadding;

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  useEffect(() => {
    const value = formProps?.values?.[name];

    if (!isFocused && !value) {
      setIsLabelShown(false);
      setPaddingStyles({});
    }
  }, [isFocused]);

  useEffect(() => {
    const value = formProps?.values?.[name];

    if (!value && !isFocused) {
      setIsLabelShown(false);
      setPaddingStyles({});
    }

    if ((value && value.length > 0) || value === 0) {
      setIsLabelShown(true);
      setPaddingStyles(inputPaddingStyles);
    }
  }, [formProps?.values?.[name]]);

  useEffect(() => {
    if (defaultValue) {
      formProps?.setFieldValue(name, defaultValue.toString());
    }
  }, [defaultValue]);

  return (
    <>
      <View style={stylesSchema.container}>
        {placeholder && isLabelShown && !isLabelHidden && (
          <Label
            name={name}
            placeholder={placeholder}
            isSquare={isSquare}
            isLabelShown={isLabelShown}
          />
        )}

        {icon && (
          <View style={stylesSchema.iconWrapper}>
            <Icon
              color={isFocused ? colors.purpleColor : colors.lightPurpleColor}
            />
          </View>
        )}

        <TextInput
          ref={inputRef}
          name={name}
          style={[
            stylesSchema.input,
            inputStyles,
            paddingStyles,
            isFocused ? defaultInputStyles.focus : defaultInputStyles.unfocused,
            formProps?.errors?.[name] &&
            Object.keys(formProps.errors[name]).length > 0
              ? stylesSchema.errorInput
              : inputStyles,
          ]}
          maxFontSizeMultiplier={1}
          secureTextEntry={type && type.length > 0 && isSecureActive}
          value={formProps?.values?.[name]}
          onChangeText={formProps?.handleChange(name)}
          onBlur={handleBlur}
          onFocus={handleFocus}
          editable={!isReadOnly}
          keyboardType={isNumber ? 'numeric' : 'default'}
          placeholder={isFocused ? '' : placeholder}
        />

        {isSecure && (
          <TouchableOpacity
            style={stylesSchema.eyeWrapper}
            onPress={() => setIsSecureActive(!isSecureActive)}
          >
            <Eye />
          </TouchableOpacity>
        )}
      </View>

      {formProps?.errors?.[name] &&
        Object.keys(formProps.errors[name]).length > 0 && (
          <Text style={stylesSchema.errorText}>{formProps.errors[name]}</Text>
        )}
    </>
  );
};
