import { TouchableOpacity, View } from 'react-native';

import { TextComponent } from '../../TextComponent';

import { colors } from '../../../../constants/constants';
import { textStyles } from '../../../../constants/constantsStyle';

import { styles } from './style';

export const ButtonComponent = ({
  icon = false,
  iconSize,
  text = '',
  stylesButton = {},
  isSmall = false,
  isFull = false,
  isSquare = false,
  isDisabled = false,
  isLoadingData = false,
  handleClick = () => {},
}) => {
  const {
    bgColor = colors.purpleColor,
    bColor = colors.purpleColor,
    textStyle = {
      ...textStyles.semiBold,
      color: colors.whiteColor,
      textTransform: 'uppercase',
    },
  } = stylesButton;

  const stylesSchema = styles(isSmall, isFull, isSquare, bColor);

  const Icon = icon;

  return (
    <TouchableOpacity
      style={stylesSchema.containerTouchable}
      onPress={handleClick}
      disabled={isDisabled || isLoadingData}
    >
      <View
        style={[
          stylesSchema.container,
          {
            backgroundColor:
              isDisabled || isLoadingData ? colors.lightGrayColor : bgColor,
            borderColor:
              isDisabled || isLoadingData ? colors.lightGrayColor : bgColor,
          },
        ]}
      >
        {icon && <Icon size={iconSize} />}

        <TextComponent styles={textStyle}>{text}</TextComponent>
      </View>
    </TouchableOpacity>
  );
};
