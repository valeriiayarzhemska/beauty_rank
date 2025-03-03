import { ScrollView, View } from 'react-native';

import { useSelector } from 'react-redux';
import { selectIsFullyRegistred } from '../../store/redux/features/auth/authSelectors';

import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { AnalizePhotoComponent } from '../../components/analyzingPhoto/AnalizePhotoComponent';
import { ReviewCarousel } from '../../components/reviewsCarousel/ReviewCarousel';

import { styles } from './style';

export const AnalizePhoto = ({ navigation }) => {
  const isFullyRegistred = useSelector(selectIsFullyRegistred);

  const stylesSchema = styles(isFullyRegistred);

  return (
    <BackgroundWrapper
      additionalStyles={stylesSchema.additionalStyles}
      isPadding={false}
      isBgGradient={true}
    >
      <View style={stylesSchema.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={stylesSchema.contentContainer}
        >
          <AnalizePhotoComponent navigation={navigation} />

          {!isFullyRegistred && <ReviewCarousel />}
        </ScrollView>
      </View>
    </BackgroundWrapper>
  );
};
