import { View } from 'react-native';

import { TextComponent } from '../../../ui/TextComponent';

import { textStyles } from '../../../../constants/constantsStyle';
import { colors } from '../../../../constants/constants';

import { styles } from './style';

export const WelcomeResultItem = ({ navigation, item, isUserWoman = true }) => {
  const stylesSchema = styles(isUserWoman);

  return (
    <View style={[stylesSchema.itemContainer]}>
      <TextComponent styles={{ ...textStyles.regular }}>
        {item.emoji}
      </TextComponent>

      <TextComponent
        styles={{
          ...textStyles.bold,
          fontSize: 18,
          color: isUserWoman ? colors.secondPurpleColor : colors.purpleColor,
        }}
      >
        {item.text}
      </TextComponent>
    </View>
  );
};
