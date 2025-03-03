import { View, TouchableOpacity } from 'react-native';

import { TextComponent } from '../../../TextComponent';

import { textStyles } from '../../../../../constants/constantsStyle';
import { colors } from '../../../../../constants/constants';

import { styles } from './style';

export const CustomRadioButton = ({
  formProps = {},
  selectedValue = {},
  radio = {},
  handleClick = () => {},
  radioListStyle = {},
  name,
  isMultiSelect = false,
}) => {
  const {
    textStyle = { ...textStyles.medium, color: colors.secondPurpleColor },
    textColorSelected = colors.whiteColor,
    bgColor = colors.purpleBgColor,
    bgColorSelected = colors.secondPurpleColor,
  } = radioListStyle;

  const stylesSchema = styles(isMultiSelect);

  const checkSelected =
    (!isMultiSelect && selectedValue === radio.value) ||
    (isMultiSelect && selectedValue?.includes(radio.value));

  return (
    <View style={stylesSchema.container}>
      <TouchableOpacity
        style={[
          stylesSchema.containerTouchable,
          {
            backgroundColor: checkSelected ? bgColorSelected : bgColor,
            borderColor:
              formProps?.errors?.[name] &&
              Object.keys(formProps.errors[name]).length > 0
                ? colors.redColor
                : bgColor,
          },
        ]}
        onPress={() => handleClick(radio)}
      >
        <TextComponent
          styles={{
            ...textStyle,
            textAlign: 'center',
            color: checkSelected ? textColorSelected : textStyle.color,
          }}
        >
          {radio.title}
        </TextComponent>
      </TouchableOpacity>
    </View>
  );
};
