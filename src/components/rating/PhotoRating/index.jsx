import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { useSelector } from 'react-redux';
import { selectPhotoToAnalize } from '../../../store/redux/features/dashboard/dashboardSelectors';

import { Sparkle } from '../../../assets/icons/Sparkle';
import Linear from '../../../assets/images/linear-circle.png';

import { TextGradient } from '../../ui/TextGradient';
import { TextComponent } from '../../ui/TextComponent';

import { textStyles } from '../../../constants/constantsStyle';
import { colors } from '../../../constants/constants';

import { styles } from './style';
import FastImage from 'react-native-fast-image';

export const PhotoRating = ({ photo = false, score }) => {
  const stylesSchema = styles();

  const userPhotoToAnalize = useSelector(selectPhotoToAnalize);

  const userScore = score ? `${Number(score).toFixed(1)}` : 10;

  return (
    <View style={stylesSchema.container}>
      <View style={[stylesSchema.sparklesContainer, stylesSchema.sparklesTop]}>
        <View style={stylesSchema.sparkleBig}>
          <Sparkle />
        </View>

        <View style={stylesSchema.sparkleLittle}>
          <Sparkle size={20} />
        </View>
      </View>

      <View
        style={[stylesSchema.sparklesContainer, stylesSchema.sparklesBottom]}
      >
        <View style={stylesSchema.sparkleBig}>
          <Sparkle />
        </View>

        <View style={stylesSchema.sparkleLittle}>
          <Sparkle size={20} />
        </View>
      </View>

      <View style={[stylesSchema.sparklesContainer, stylesSchema.sparklesLeft]}>
        <View style={stylesSchema.sparkleBig}>
          <Sparkle color={colors.purpleColor} />
        </View>

        <View style={stylesSchema.sparkleLittle}>
          <Sparkle
            color={colors.purpleColor}
            size={20}
          />
        </View>
      </View>

      <View
        style={[stylesSchema.sparklesContainer, stylesSchema.sparklesRight]}
      >
        <View style={stylesSchema.sparkleBig}>
          <Sparkle color={colors.purpleColor} />
        </View>
      </View>

      <View style={stylesSchema.imageContainer}>
        <LinearGradient
          colors={['#8A6EDA', '#A16EDA', '#BE72DD', '#EBB1EB']}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={stylesSchema.gradientBorder}
        >
          <FastImage
            source={{ uri: photo ? photo : userPhotoToAnalize?.uri }}
            style={stylesSchema.image}
            resizeMode={FastImage.resizeMode.cover}
          />
        </LinearGradient>
      </View>

      <View style={stylesSchema.scoreContainer}>
        <View style={stylesSchema.bgGradientContainer}>
          <FastImage
            source={Linear}
            style={stylesSchema.image}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>

        <TextComponent
          styles={{
            ...textStyles.bold,
            color: colors.thirdPurpleColor,
            textAlign: 'center',
            maxWidth: 120,
          }}
        >
          Your beauty rating is
        </TextComponent>

        <View style={stylesSchema.score}>
          <TextGradient
            colors={colors.manBgTopText}
            style={{
              ...textStyles.black,
              fontSize: 46,
            }}
            maskStyles={{
              height: 60,
              width:
                userScore?.toString()?.length === 2
                  ? 60
                  : userScore?.toString()?.length === 1
                  ? 50
                  : 80,
            }}
          >
            {userScore}
          </TextGradient>

          <TextComponent
            styles={{
              ...textStyles.medium,
              color: colors.thirdPurpleColor,
              fontSize: 22,
              marginBottom: 8,
            }}
          >
            /10
          </TextComponent>
        </View>
      </View>
    </View>
  );
};
