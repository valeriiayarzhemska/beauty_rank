import { Image, ImageBackground, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { useSelector } from 'react-redux';

import Linear from '../../../assets/images/linear-circle-small.png';
import { TextGradient } from '../../ui/TextGradient';

import { textStyles } from '../../../constants/constantsStyle';
import { colors } from '../../../constants/constants';

import { styles } from './style';
import { selectUser } from '../../../store/redux/features/auth/authSelectors';

export const MainPhoto = ({ navigation }) => {
  const stylesSchema = styles();

  const user = useSelector(selectUser);

  const handleClick = () => {
    navigation.navigate('PhotoAnalysisScreens', {
      screen: 'UploadAnalizePhoto',
    });
  };

  return (
    <TouchableOpacity
      onPress={handleClick}
      style={stylesSchema.container}
    >
      {user?.analysis?.user?.image && (
        <ImageBackground
          source={{ uri: `data:image/jpeg;base64,${user.analysis.user.image}` }}
          resizeMode="cover"
          style={stylesSchema.imageBg}
        >
          <View
            style={[
              stylesSchema.gradientContainer,
              stylesSchema.gradientContainerTop,
            ]}
          >
            <LinearGradient
              colors={['rgba(138, 110, 218, 0)', '#8A6EDA']}
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: 0 }}
              style={stylesSchema.gradient}
            />
          </View>

          <View
            style={[
              stylesSchema.gradientContainer,
              stylesSchema.gradientContainerBottom,
            ]}
          >
            <LinearGradient
              colors={['#BD72DD', 'rgba(138, 110, 218, 0)']}
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: 0 }}
              style={stylesSchema.gradient}
            />
          </View>

          <View style={stylesSchema.scoreContainer}>
            <View style={stylesSchema.bgGradientContainer}>
              <Image
                source={Linear}
                style={stylesSchema.image}
              />
            </View>

            <View style={stylesSchema.score}>
              <TextGradient
                colors={colors.manBgTopText}
                style={{ ...textStyles.black, fontSize: 32 }}
              >
                {`${Number(user?.analysis?.beautyScore || 1).toFixed(1)}`}
              </TextGradient>
            </View>
          </View>
        </ImageBackground>
      )}
    </TouchableOpacity>
  );
};
