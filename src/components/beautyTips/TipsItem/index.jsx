import { View } from 'react-native';

import { TextComponent } from '../../ui/TextComponent';

import { colors } from '../../../constants/constants';
import { textStyles } from '../../../constants/constantsStyle';

import { styles } from './style';

export const TipsItem = ({ item = {}, index }) => {
  const stylesSchema = styles();

  const { name, tip } = item;

  return (
    <View style={stylesSchema.container}>
      <View style={stylesSchema.wrapper}>
        <TextComponent
          styles={{
            ...textStyles.semiBold,
            fontSize: 15,
            color: colors.darkGrayColor,
          }}
        >
          {name}
        </TextComponent>

        <TextComponent
          styles={{
            ...textStyles.bold,
            fontSize: 20,
            color: colors.blackColor,
          }}
        >
          {tip}
        </TextComponent>
      </View>
    </View>
  );
};
