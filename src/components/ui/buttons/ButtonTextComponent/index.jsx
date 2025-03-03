import { TouchableOpacity } from 'react-native';

import { TextComponent } from '../../TextComponent';

import { colors } from '../../../../constants/constants';
import { textStyles } from '../../../../constants/constantsStyle';

import { styles } from './style';

export const ButtonTextComponent = ({
  text = '',
  stylesButton = {},
  isSmall = false,
  isDisabled = false,
  handleClick = () => {},
}) => {
  const {
    textStyle = {
      ...textStyles.regular,
      color: colors.purpleColor,
      textDecorationLine: 'underline',
    },
  } = stylesButton;

  const stylesSchema = styles();

  return (
    <TouchableOpacity
      style={stylesSchema.container}
      onPress={handleClick}
    >
      <TextComponent styles={textStyle}>{text}</TextComponent>
    </TouchableOpacity>
  );
};
