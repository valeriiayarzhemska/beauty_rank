import { Image, Linking, TouchableOpacity, View } from 'react-native';
import { useMemo } from 'react';

import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';

import Instagram from '../../../assets/images/instagram-logo.png';

import { TextComponent } from '../../ui/TextComponent';
import { TextGradient } from '../../ui/TextGradient';

import { textStyles } from '../../../constants/constantsStyle';
import { colors } from '../../../constants/constants';

import { styles } from './style';

export const AllTimeItem = ({ filters = {}, item = {}, index }) => {
  const userScore = item?.beautyScore?.toString()?.slice(0, 3);
  const isMan = item?.user?.gender === 1;

  const stylesSchema = styles(isMan);

  const gradientColor = useMemo(
    () => (isMan ? '#8A6EDA' : '#BE72DD'),
    [item?.user?.gender]
  );

  const gradientTextColor = useMemo(
    () => (isMan ? colors.manBgTopText : colors.womanBgTopText),
    [item?.user?.gender]
  );

  const handleInstagramClick = () => {
    if (item?.user?.instagram) {
      Linking.openURL(item.user.instagram);
    }
  };

  return (
    <View style={stylesSchema.container}>
      <View style={stylesSchema.wrapper}>
        <FastImage
          style={stylesSchema.imageBg}
          source={{ uri: `data:image/jpeg;base64,${item?.user?.image}` }}
          resizeMode={FastImage.resizeMode.cover}
        />

        <View style={stylesSchema.gradientContainer}>
          <LinearGradient
            colors={[
              'rgba(138, 110, 218, 0)',
              'rgba(138, 110, 218, 0)',
              gradientColor,
            ]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            locations={[0, 0.6952, 1]}
            style={stylesSchema.gradient}
          ></LinearGradient>
        </View>

        <View style={stylesSchema.score}>
          <TextGradient
            colors={gradientTextColor}
            style={{
              ...textStyles.black,
            }}
            maskStyles={{
              height: 16,
            }}
          >
            {userScore.length === 1 ? `${userScore}.0` : userScore}
          </TextGradient>
        </View>

        <View style={stylesSchema.contentContainer}>
          <TouchableOpacity
            onPress={handleInstagramClick}
            style={stylesSchema.buttonContainer}
          >
            {item?.user?.instagram && (
              <Image
                source={Instagram}
                style={stylesSchema.image}
              />
            )}
          </TouchableOpacity>

          <View style={stylesSchema.userInfo}>
            <TextComponent
              styles={{
                ...textStyles.bold,
                fontSize: 17,
                opacity: 0.98,
                color: colors.whiteColor,
              }}
            >
              {item?.user?.name}
            </TextComponent>

            <View style={stylesSchema.country}>
              <View style={stylesSchema.countryImg}>
                <FastImage
                  source={{
                    uri: `https://flagcdn.com/40x30/${item?.user?.country}.png`,
                    priority: FastImage.priority.high,
                  }}
                  style={stylesSchema.image}
                />
              </View>

              <TextComponent
                styles={{
                  ...textStyles.medium,
                  fontSize: 11,
                  opacity: 0.9,
                  color: colors.whiteColor,
                }}
              >
                {item?.user?.countryName}
              </TextComponent>
            </View>
          </View>
        </View>
      </View>

      {/* <ImageBackground
        source={{ uri: `data:image/jpeg;base64,${item?.user?.image}` }}
        style={stylesSchema.imageBg}
        progressiveRenderingEnabled={true}
        resizeMethod="resize"
        resizeMode="cover"
      ></ImageBackground> */}

      <View style={stylesSchema.analysisContainer}>
        <View style={stylesSchema.place}>
          <TextComponent
            styles={{
              ...textStyles.black,
              color: colors.secondVioletColor,
            }}
          >
            {index + 1}
          </TextComponent>

          <TextComponent
            styles={{
              ...textStyles.regular,
              fontSize: 11,
              color: colors.secondVioletColor,
            }}
          >
            Place
          </TextComponent>
        </View>
      </View>
    </View>
  );
};
