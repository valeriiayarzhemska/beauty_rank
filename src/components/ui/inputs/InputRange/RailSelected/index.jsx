import React, { memo } from 'react';
import { View } from 'react-native';

import { styles } from './style';

const RailSelected = () => {
  const stylesSchema = styles();

  return <View style={stylesSchema.root} />;
};

export default memo(RailSelected);
