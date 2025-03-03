import { View } from 'react-native';
import { TextComponent } from '../ui/TextComponent';

import { textStyles } from '../../constants/constantsStyle';
import { colors } from '../../constants/constants';

import { styles } from './style';

export const ErrorMessage = ({ error = '' }) => {
  const stylesSchema = styles();

  return (
    <View style={stylesSchema.container}>
      <TextComponent
        styles={{
          ...textStyles.semiBold,
          color: colors.redColor,
          textAlign: 'center',
        }}
      >
        {error}
      </TextComponent>
    </View>
  );
};
