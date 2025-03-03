import React, { memo } from 'react';
import { View, Text } from 'react-native';

import { styles } from './style';

const Label = ({ text, ...restProps }) => {
  const stylesSchema = styles();

  return (
    <View
      style={stylesSchema.root}
      {...restProps}
    >
      <Text
        maxFontSizeMultiplier={1}
        style={stylesSchema.text}
      >
        {text}
      </Text>
    </View>
  );
};

export default memo(Label);
