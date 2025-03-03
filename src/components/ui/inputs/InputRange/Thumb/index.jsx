import { memo } from 'react';
import { View } from 'react-native';

import { styles } from './style';

const Thumb = ({ name, color }) => {
  const stylesSchema = styles(color);

  return (
    <View style={stylesSchema.container}>
      <View
        style={name === 'high' ? stylesSchema.rootHigh : stylesSchema.rootLow}
      />
    </View>
  );
};

export default memo(Thumb);
