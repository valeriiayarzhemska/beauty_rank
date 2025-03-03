import { ScrollView, View } from 'react-native';

import { useSelector } from 'react-redux';
import { selectPhotoAnalizeData } from '../../store/redux/features/userData/userDataSelectors';

import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { RatingScore } from '../../components/rating/RatingScore';
import { PhotoRating } from '../../components/rating/PhotoRating';

import { styles } from './style';

export const Rating = ({ navigation, route }) => {
  const stylesSchema = styles(route?.params?.isTabBar);

  const analysis = route?.params?.analysis ? route.params.analysis : false;
  const photoAnalizeData = useSelector(selectPhotoAnalizeData);

  const textes = {
    subtitle: analysis ? analysis?.title || '' : photoAnalizeData?.title || '',
    rank: analysis
      ? analysis?.position || ''
      : photoAnalizeData?.position || '',
    emotion: analysis
      ? analysis?.emotion || ''
      : photoAnalizeData?.emotion?.name || photoAnalizeData?.emotion,
    age: analysis
      ? analysis?.ageByAppearance || ''
      : photoAnalizeData?.ageByAppearance,
  };

  const handleNextClick = () => {
    if (analysis) {
      navigation.navigate('PhotoAnalysisScreens', {
        screen: 'RatingInfo',
        params: { analysis, isTabBar: true },
      });
    } else {
      navigation.navigate('RatingInfo');
    }
  };

  return (
    <BackgroundWrapper
      isBackButton={route?.params?.isTabBar}
      additionalStyles={stylesSchema.additionalStyles}
      isBgGradient={true}
      navigation={navigation}
    >
      <View style={stylesSchema.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={stylesSchema.contentContainer}
        >
          <PhotoRating
            photo={`data:image/jpeg;base64,${
              analysis ? analysis?.user?.image : photoAnalizeData?.user?.image
            }`}
            score={
              analysis ? analysis?.beautyScore : photoAnalizeData.beautyScore
            }
          />

          <RatingScore
            textes={textes}
            handleNextClick={handleNextClick}
          />
        </ScrollView>
      </View>
    </BackgroundWrapper>
  );
};
