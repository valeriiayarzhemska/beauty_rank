import { TouchableOpacity, View } from 'react-native';

import { TextComponent } from '../../ui/TextComponent';
import { Arrow } from '../../../assets/icons/Arrow';

import { textStyles } from '../../../constants/constantsStyle';
import { colors } from '../../../constants/constants';

import { styles } from './style';

export const SettingsItem = ({
  item = {},
  isLast = false,
  handleClick = () => {},
}) => {
  const stylesSchema = styles(isLast);

  const {
    title,
    link,
    isBrowserLink = false,
    isRed = false,
    icon = false,
  } = item;
  const Icon = icon;

  return (
    <TouchableOpacity
      onPress={() => handleClick(link, isBrowserLink)}
      style={stylesSchema.itemContainer}
    >
      <View style={stylesSchema.icon}>
        {icon && <Icon color={isRed ? colors.redColor : colors.blackColor} />}

        <TextComponent
          styles={{
            ...textStyles.semiBold,
            fontSize: 18,
            color: isRed ? colors.redColor : colors.blackColor,
          }}
        >
          {title}
        </TextComponent>
      </View>

      <View style={stylesSchema.arrow}>
        <Arrow color={isRed ? colors.redColor : colors.blackColor} />
      </View>
    </TouchableOpacity>
  );
};
