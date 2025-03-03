import { Text, View } from 'react-native';

import { textStyles } from '../../../../constants/constantsStyle';
import { colors } from '../../../../constants/constants';

import { styles } from './style';

export const InputLabel = ({
  isLabelShown,
  name,
  placeholder,
  isSquare = false,
}) => {
  const stylesSchema = styles(isLabelShown, isSquare);

  return (
    <View
      htmlFor={name}
      style={stylesSchema.container}
    >
      <Text
        allowFontScaling={false}
        maxFontSizeMultiplier={1}
        style={
          isLabelShown
            ? { ...textStyles.medium, fontSize: 12 }
            : { ...textStyles.regular, color: colors.grayColor }
        }
      >
        {placeholder}
      </Text>
    </View>
  );
};
