import { Text } from 'react-native';

import { textStyles } from '../../../constants/constantsStyle';

export const TextComponent = ({ children, styles = textStyles.regular }) => {
  return (
    <Text
      maxFontSizeMultiplier={1}
      style={styles}
    >
      {children}
    </Text>
  );
};
