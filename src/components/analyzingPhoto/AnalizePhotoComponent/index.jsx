import { useEffect, useState } from 'react';
import { Image, ImageBackground, TouchableOpacity, View } from 'react-native';

import Woman from '../../../assets/images/test-photo.jpg';

import { useDispatch, useSelector } from 'react-redux';
import { selectPhotoToAnalize } from '../../../store/redux/features/dashboard/dashboardSelectors';
import { setPhotoToAnalize } from '../../../store/redux/features/dashboard/dashboardSlice';
import {
  useAnalizePhotoMutation,
  useGetUserQuery,
} from '../../../store/redux/services/user/userApi';
import {
  selectToken,
  selectIsFullyRegistred,
  selectUser,
} from '../../../store/redux/features/auth/authSelectors';

import { TextComponent } from '../../ui/TextComponent';
import { LoaderBar } from '../../LoaderBar';
import { AnimatedSparkles } from '../AnimatedSparkles';
import { AnalizePhotoAnimation } from '../AnalizePhotoAnimation';
import Backgroud from '../../../assets/images/bg-analize-photo.png';

import { textStyles } from '../../../constants/constantsStyle';
import { colors } from '../../../constants/constants';
import { errorMessages, loadingText } from '../../../constants/constantsUI';

import { styles } from './style';

export const AnalizePhotoComponent = ({ navigation }) => {
  const stylesSchema = styles();

  const [text, setText] = useState(loadingText.analize);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);

  const dispatch = useDispatch();
  const userPhotoToAnalize = useSelector(selectPhotoToAnalize);
  const user = useSelector(selectUser);
  const userToken = useSelector(selectToken);
  const isFullyRegistred = useSelector(selectIsFullyRegistred);

  const {
    data: userData,
    isFetching: isUserFetching,
    error: userError,
    refetch,
  } = useGetUserQuery(
    { token: userToken, IncludeImages: true },
    {
      skip: !userToken,
    }
  );

  const [analizePhoto, { data, isFetching, error: analizePhotoError }] =
    useAnalizePhotoMutation();

  const handleAnimation = async (hasError, response) => {
    if (!hasError) {
      setText(loadingText.done);
      setIsSuccess(true);

      await refetch();

      if (isFullyRegistred) {
        navigation.navigate('PhotoAnalysisScreens', {
          screen: 'Rating',
          params: {
            analysis: response,
            isTabBar: true,
          },
        });
      } else {
        navigation.navigate('RatingLocked');
      }
    } else {
      //  for testing dev

      /* setText(loadingText.done);
      setIsSuccess(true);

      setTimeout(() => {
        if (isFullyRegistred) {
          navigation.navigate('Rating', {
            analysis: data,
            isTabBar: true,
          });
        } else {
          navigation.navigate('RatingLocked');
        }
      }, 1000); */

      setIsError(true);
      setText(loadingText.error);
    }
  };

  const handleAnalize = async () => {
    setError(null);

    // for dev
    // const womanImageSource = Image.resolveAssetSource(Woman);

    if (userPhotoToAnalize) {
      const formData = new FormData();
      let response;

      formData.append('Image', {
        uri: userPhotoToAnalize.uri,
        type: userPhotoToAnalize.type,
        name: userPhotoToAnalize.fileName,
      });

      // for dev
      /* formData.append('Image', {
        uri: womanImageSource.uri,
        type: 'image/png',
        name: 'woman-image.png',
      }); */

      // if (!isFullyRegistred) {
      formData.append(
        'AnalysisId',
        !isFullyRegistred ? user?.analysisId : user?.analysis?.id
      );

      response = await analizePhoto({
        data: formData,
        token: userToken,
      });

      /* } else {
        response = await analizePhotoAfterRegister({
          data: formData,
          token: userToken,
        });
      } */

      const hasError = response?.error || response?.errors;

      if (!!hasError) {
        setError(errorMessages.wentWrong);
      }

      if (isAnimationFinished) {
        handleAnimation(!!hasError, response?.data);
      } else {
        setTimeout(() => {
          handleAnimation(!!hasError, response?.data);
        }, 3000);
      }
    }
  };

  const handleRefresh = async () => {
    if (isError) {
      await navigation.navigate('UploadAnalizePhoto');

      await dispatch(setPhotoToAnalize(null));
    } else {
      return;
    }
  };

  useEffect(() => {
    handleAnalize();
  }, [userPhotoToAnalize]);

  return (
    <View style={stylesSchema.container}>
      <TouchableOpacity
        activeOpacity={1.0}
        onPress={handleRefresh}
        style={stylesSchema.imageBgContainer}
      >
        <ImageBackground
          source={Backgroud}
          resizeMode="cover"
          style={stylesSchema.imageBg}
        >
          <View style={stylesSchema.contentContainer}>
            <AnalizePhotoAnimation
              isSuccess={isSuccess}
              isError={isError}
              setIsAnimationFinished={setIsAnimationFinished}
              handleRefresh={handleRefresh}
            />

            <View style={stylesSchema.loaderContainer}>
              <TextComponent
                styles={{
                  ...textStyles.bold,
                  color: colors.whiteColor,
                  fontSize: 17,
                  textAlign: 'center',
                  textTransform: 'uppercase',
                }}
              >
                {text}
              </TextComponent>

              <LoaderBar />
            </View>
          </View>

          <View style={stylesSchema.sparklesContainer}>
            <AnimatedSparkles />
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};
