import { ScrollView, View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { selectPhotoAnalizeData } from '../../store/redux/features/userData/userDataSelectors';
import { setIsFullyRegistred } from '../../store/redux/features/auth/authSlice';
import { selectIsFullyRegistred } from '../../store/redux/features/auth/authSelectors';

import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { RatingCountryDetails } from '../../components/rating/RatingCountryDetails';
import { RatingDetails } from '../../components/rating/RatingDetails';
import { ButtonComponent } from '../../components/ui/buttons/ButtonComponent';

import { colors } from '../../constants/constants';
import { textStyles } from '../../constants/constantsStyle';

import { styles } from './style';

export const RatingInfo = ({ navigation, route }) => {
  const stylesSchema = styles(route?.params?.isTabBar);

  const analysis = route?.params?.analysis ? route.params.analysis : false;

  const dispatch = useDispatch();
  const photoAnalizeData = useSelector(selectPhotoAnalizeData);
  const isFullyRegistred = useSelector(selectIsFullyRegistred);

  const handleClick = async () => {
    if (isFullyRegistred) {
      navigation.navigate('Main');
    } else {
      await dispatch(setIsFullyRegistred(true));
    }
  };

  const handleSeeAllClick = async () => {
    if (isFullyRegistred) {
      navigation.navigate('GlobalCountry');
    } else {
      navigation.navigate('Subscription');
    }
  };

  return (
    <BackgroundWrapper
      additionalStyles={stylesSchema.additionalStyles}
      isBgGradient={true}
      isBackButton={route?.params?.isTabBar}
      navigation={navigation}
    >
      <View style={stylesSchema.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={stylesSchema.contentContainer}
        >
          <RatingDetails
            analysis={analysis}
            photoAnalizeData={photoAnalizeData}
          />

          <RatingCountryDetails
            analysis={analysis}
            handleClick={handleSeeAllClick}
          />

          <View style={stylesSchema.buttonContainer}>
            <ButtonComponent
              stylesButton={{
                bgColor: colors.radioItemBg,
                bColor: colors.radioItemBg,
                textStyle: {
                  ...textStyles.semiBold,
                  color: colors.purpleColor,
                  textTransform: 'uppercase',
                },
              }}
              text={isFullyRegistred ? 'Go to the home page' : 'Continue'}
              handleClick={handleClick}
            />
          </View>
        </ScrollView>
      </View>
    </BackgroundWrapper>
  );
};
