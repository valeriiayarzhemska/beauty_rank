import { View, TouchableOpacity } from 'react-native';

import { TextComponent } from '../../../TextComponent';

import { textStyles } from '../../../../../constants/constantsStyle';
import { colors } from '../../../../../constants/constants';

import { styles } from './style';

export const ToggleItem = ({
  selectedValue = {},
  item = {},
  handleClick = () => {},
}) => {
  const stylesSchema = styles();

  const checkSelected = selectedValue === item.value;

  return (
    <View style={stylesSchema.container}>
      <TouchableOpacity
        style={[
          stylesSchema.containerTouchable,
          {
            backgroundColor: checkSelected
              ? colors.purpleColor
              : colors.thirdLightPurpleColor,
          },
        ]}
        onPress={() => handleClick(item)}
      >
        <TextComponent
          styles={{
            ...textStyles.medium,
            textAlign: 'center',
            color: checkSelected ? colors.whiteColor : colors.purpleColor,
          }}
        >
          {item.title}
        </TextComponent>
      </TouchableOpacity>
    </View>
  );
};
