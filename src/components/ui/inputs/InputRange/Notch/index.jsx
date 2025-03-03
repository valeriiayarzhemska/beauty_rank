import { memo } from 'react';
import { View } from 'react-native';

import { styles } from './style';

const Notch = props => {
  const stylesSchema = styles();

  return (
    <View
      style={stylesSchema.root}
      {...props}
    />
  );
};

export default memo(Notch);
