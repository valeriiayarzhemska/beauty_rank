import { useEffect, useRef, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';

import DatePicker from 'react-native-date-picker';

import { TextComponent } from '../../TextComponent';

import { defaultInputStyles } from '../../../../constants/constantsStyle';
import { formatDateToString } from '../../../../utils/utils';
import { colors } from '../../../../constants/constants';

import { styles } from './style';

export const InputDate = ({
  formProps,
  label,
  icon,
  placeholder,
  name,
  defaultValue,
  isSquare = false,
}) => {
  const stylesSchema = styles(placeholder);

  const [isFocused, setIsFocused] = useState(false);
  const [isLabelShown, setIsLabelShown] = useState(false);
  const [date, setDate] = useState(defaultValue ? defaultValue : null);
  const [textDate, setTextDate] = useState(
    defaultValue ? formatDateToString(defaultValue) : ''
  );
  const [open, setOpen] = useState(false);

  const inputRef = useRef();
  const Icon = icon;
  const Label = label;

  const hasPlaceloderStyles = placeholder
    ? {
        ...defaultInputStyles.containerSquare,
        ...defaultInputStyles.containerSquarePadding,
      }
    : {
        ...defaultInputStyles.containerSquareWithoutLabel,
        ...defaultInputStyles.containerSquareWithoutLabelPadding,
      };
  const inputStyles = icon
    ? { ...hasPlaceloderStyles, paddingHorizontal: 14 }
    : hasPlaceloderStyles;

  const handleSelection = async date => {
    const isValidDate = !isNaN(new Date(date).getTime());

    if (date && isValidDate) {
      setOpen(false);
      setDate(date);

      await formProps?.setFieldValue(name, date);
    }
  };

  useEffect(() => {
    if (!formProps?.values?.[name]) {
      setIsLabelShown(false);
    } else {
      setIsLabelShown(true);
    }
  }, [formProps?.values?.[name]]);

  useEffect(() => {
    if (date) {
      setTextDate(formatDateToString(date));
    }
  }, [date]);

  useEffect(() => {
    if (defaultValue) {
      formProps?.setFieldValue(name, date);
    }

    if (formProps?.values?.[name]) {
      setDate(formProps.values[name]);
      setTextDate(formatDateToString(formProps.values[name]));
    }
  }, []);

  return (
    <>
      <View style={stylesSchema.container}>
        <TouchableOpacity
          style={stylesSchema.fullWidth}
          onPress={() => setOpen(true)}
        >
          <View
            style={[
              inputStyles,
              isFocused
                ? defaultInputStyles.focus
                : defaultInputStyles.unfocused,
              formProps?.errors?.[name] &&
              Object.keys(formProps.errors[name]).length > 0
                ? stylesSchema.errorInput
                : inputStyles,
            ]}
          >
            {placeholder && (
              <Label
                name={name}
                placeholder={placeholder}
                isSquare={true}
                isLabelShown={isLabelShown}
              />
            )}

            <TextComponent>{textDate}</TextComponent>
          </View>

          {icon && (
            <View style={stylesSchema.iconWrapper}>
              <Icon color={colors.purpleColor} />
            </View>
          )}
        </TouchableOpacity>

        <DatePicker
          maxFontSizeMultiplier={1}
          modal
          open={open}
          date={date || new Date()}
          onConfirm={date => handleSelection(date)}
          onCancel={() => {
            setOpen(false);
          }}
          mode="date"
        />
      </View>
    </>
  );
};
