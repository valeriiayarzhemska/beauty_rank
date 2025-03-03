import { TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { BlurBg } from '../../ui/BlurBg';

import { styles } from './style';

export const WidgetWrapper = ({
  children,
  handleClick = () => {},
  itemStyles = {},
  minHeight = false,
  blurImage,
}) => {
  const stylesSchema = styles(minHeight);

  return (
    <TouchableOpacity
      onPress={handleClick}
      style={stylesSchema.itemContainer}
    >
      <FastImage
        style={stylesSchema.imageBg}
        source={blurImage}
        resizeMode={FastImage.resizeMode.cover}
      />
      {/* <BlurBg> */}
      <View style={[stylesSchema.content, itemStyles]}>{children}</View>
      {/* </BlurBg> */}
    </TouchableOpacity>
  );
};
