import { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import { DownArrow } from '../../../../assets/icons/DownArrow';

import { colors } from '../../../../constants/constants';

import {
  styles,
  stylesSelectError,
  stylesSelectSelected,
  stylesSelectUnfocus,
} from './style';

export const InputSelect = ({
  formProps,
  label,
  icon,
  placeholder,
  name,
  selectData = [],
}) => {
  const stylesSchema = styles(placeholder);

  const [isFocused, setIsFocused] = useState(false);
  const [isLabelShown, setIsLabelShown] = useState(false);
  const [inputStyles, setInputStyles] = useState(stylesSelectUnfocus);

  const inputRef = useRef();
  const Icon = icon;
  const Label = label;

  const handleSelection = value => {
    if (!value || value === placeholder) {
      formProps?.setFieldValue(name, '');
      setIsLabelShown(false);
      setInputStyles(stylesSelectUnfocus);
    } else {
      formProps?.setFieldValue(name, value);
      setInputStyles(stylesSelectSelected);
    }
  };

  useEffect(() => {
    if (!formProps?.values?.[name] || formProps?.values?.[name] === null) {
      setIsLabelShown(false);
    } else {
      setIsLabelShown(true);
    }
  }, [formProps?.values?.[name]]);

  useEffect(() => {
    if (
      formProps?.errors?.[name] &&
      Object.keys(formProps?.errors?.[name]).length > 0
    ) {
      setInputStyles(stylesSelectError);
    } else if (
      formProps?.values?.[name]?.length > 0 ||
      formProps?.values?.[name] === 0
    ) {
      setInputStyles(stylesSelectSelected);
    } else {
      setInputStyles(stylesSelectUnfocus);
    }
  }, [formProps?.errors?.[name]?.length]);

  useEffect(() => {
    setIsLabelShown(!!formProps?.values?.[name]);

    if (formProps?.values?.[name]) {
      handleSelection(formProps?.values?.[name]);
    }
  }, [formProps?.values?.[name]]);

  return (
    <>
      <View style={stylesSchema.container}>
        {placeholder && isLabelShown && (
          <Label
            name={name}
            placeholder={placeholder}
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

        <RNPickerSelect
          onValueChange={value => handleSelection(value)}
          useNativeAndroidPickerStyle={false}
          placeholder={{
            label: placeholder,
            value: placeholder,
            color: colors.grayColor,
          }}
          items={selectData}
          value={formProps.values[name] || placeholder}
          style={inputStyles}
        />

        <View style={stylesSchema.arrowIcon}>
          <DownArrow />
        </View>
      </View>
    </>
  );
};
