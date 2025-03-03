import { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';

import { useDispatch, useSelector } from 'react-redux';
import { setPhotoToAnalize } from '../../store/redux/features/dashboard/dashboardSlice';
import { selectPhotoAnalizeData } from '../../store/redux/features/userData/userDataSelectors';
import { useUpdateEventsMutation } from '../../store/redux/services/events/eventsApi';

import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { BackButton } from '../../components/ui/buttons/BackButton';
import { PhotoRatingLocked } from '../../components/rating/PhotoRatingLocked';
import { RatingScore } from '../../components/rating/RatingScore';

import { styles } from './style';

export const RatingLocked = ({ navigation }) => {
  const stylesSchema = styles();

  const dispatch = useDispatch();
  const photoAnalizeData = useSelector(selectPhotoAnalizeData);

  const [isAnalize, setIsAnalize] = useState(photoAnalizeData);

  const [
    updateEvents,
    { isFetching: isUpdatingEventsFetching, error: updatingEventsError },
  ] = useUpdateEventsMutation();

  const handleBackClick = async () => {
    await dispatch(setPhotoToAnalize(null));

    navigation.navigate('UploadAnalizePhoto');
  };

  const handleNextClick = async () => {
    const uniqueId = await DeviceInfo.getUniqueId();
    const responseEvent = await updateEvents({
      EventType: 6,
      UserId: uniqueId,
      ContentName: 'hidden result',
      ContentCategory: 'hidden result',
      ContentIds: ['1', '2', '3'],
    });

    if (responseEvent?.error || !responseEvent?.data?.token) {
      console.log('Error updating registration event:', responseEvent);
    }

    navigation.navigate('Subscription');
  };

  useEffect(() => {
    if (photoAnalizeData) {
      setIsAnalize(photoAnalizeData);
    }
  }, [photoAnalizeData]);

  return (
    <BackgroundWrapper
      additionalStyles={stylesSchema.additionalStyles}
      isBgGradient={true}
    >
      <View style={stylesSchema.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={stylesSchema.contentContainer}
        >
          <BackButton
            handleBackClick={handleBackClick}
            navigation={navigation}
          />

          <PhotoRatingLocked />

          {isAnalize && (
            <RatingScore
              textes={{
                subtitle: isAnalize?.title || '',
                rank: isAnalize?.position || '',
                emotion: isAnalize?.emotion?.name || isAnalize?.emotion,
                age: isAnalize?.ageByAppearance,
              }}
              handleNextClick={handleNextClick}
            />
          )}
        </ScrollView>
      </View>
    </BackgroundWrapper>
  );
};
