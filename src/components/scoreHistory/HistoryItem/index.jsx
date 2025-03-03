import { Image, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import Linear from '../../../assets/images/linear-circle-small.png';
import { TextComponent } from '../../ui/TextComponent';
import { Eye } from '../../../assets/icons/Eye';
import { TextGradient } from '../../ui/TextGradient';

import { textStyles } from '../../../constants/constantsStyle';
import { colors } from '../../../constants/constants';
import { formatDate } from '../../../utils/utils';

import { styles } from './style';

export const HistoryItem = ({ navigation, item = {}, isLast = false }) => {
  const stylesSchema = styles();

  const date = formatDate(item.createdDate);

  const handleClick = () => {
    navigation.navigate('PhotoAnalysisScreens', {
      screen: 'Rating',
      params: { analysis: item, isTabBar: true },
    });
  };

  return (
    <View style={[stylesSchema.row, !isLast ? stylesSchema.rowBorder : {}]}>
      <View style={stylesSchema.imageUser}>
        <FastImage
          source={{ uri: `data:image/jpeg;base64,${item?.user?.image}` }}
          style={stylesSchema.image}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>

      <View style={stylesSchema.scoreContainer}>
        <View style={stylesSchema.bgGradientContainer}>
          <Image
            source={Linear}
            style={stylesSchema.imageLinear}
          />
        </View>

        <View style={stylesSchema.score}>
          <TextGradient
            colors={colors.manBgTopText}
            style={{
              ...textStyles.black,
              fontSize: 20,
            }}
            maskStyles={{
              height: 51,
              width: 53,
            }}
          >
            {`${Number(item?.beautyScore || 1).toFixed(1)}`}
          </TextGradient>
        </View>
      </View>

      <TextComponent styles={{ ...textStyles.bold, fontSize: 14 }}>
        {item.position}
      </TextComponent>

      <TextComponent styles={{ ...textStyles.bold, fontSize: 14 }}>
        {date}
      </TextComponent>

      <TouchableOpacity
        onPress={handleClick}
        style={stylesSchema.button}
      >
        <Eye />
      </TouchableOpacity>
    </View>
  );
};
