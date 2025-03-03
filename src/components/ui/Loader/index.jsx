import { ActivityIndicator, View } from 'react-native';

import { colors } from '../../../constants/constants';

import { styles } from './style';

export const Loader = ({
  height,
  color = colors.grayColor,
  containerStyles = {},
}) => {
  const stylesSchema = styles(height, containerStyles);

  return (
    <View style={stylesSchema.container}>
      <ActivityIndicator
        size="large"
        color={color}
      />
    </View>
  );
};
