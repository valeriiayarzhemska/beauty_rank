import { Image, TouchableOpacity, View } from 'react-native';

import Camera from '../../assets/images/take-photo.png';
import Gallery from '../../assets/images/select-photo.png';

import { BackgroundWrapper } from '../../BackgroundWrapper';
import { TextComponent } from '../../ui/TextComponent';

import { styles } from './style';
import { textStyles } from '../../../constants/constantsStyle';
import { Stars } from '../../../assets/icons/Stars';
import { StarGradient } from '../../../assets/icons/StarGradient';
import { StarsGradient } from '../../../assets/icons/StarsGradient';
import { useEffect, useState } from 'react';
import {
  checkCameraPermission,
  checkGalleryPermission,
  requestCameraPermissions,
  requestGalleryPermissions,
} from '../../../utils/permissions';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { setPhotoToAnalize } from '../../../store/redux/features/dashboard/dashboardSlice';
import { selectPhotoToAnalize } from '../../../store/redux/features/dashboard/dashboardSelectors';

export const ChoosePhoto = ({ navigation, isApplied }) => {
  const stylesSchema = styles();

  const dispatch = useDispatch();
  const userPhotoToAnalize = useSelector(selectPhotoToAnalize);

  const [cameraPermission, setCameraPermission] = useState(false);
  const [galleryPermission, setGalleryPermission] = useState(false);
  const [userAssets, setUserAssets] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);

  const options = { mediaType: 'photo' };

  const checkPermissions = async () => {
    const isGrantedCamera = await checkCameraPermission();
    const isGrantedGallery = await checkGalleryPermission();

    setCameraPermission(isGrantedCamera);
    setGalleryPermission(isGrantedGallery);
  };

  const handleCameraClick = async () => {
    if (cameraPermission) {
      const result = await launchCamera(options);

      if (result?.assets) {
        setUserAssets(result.assets);
      }
    } else {
      await requestCameraPermissions();
    }
  };

  const handleGalleryClick = async () => {
    if (galleryPermission) {
      const result = await launchImageLibrary(options);

      if (result?.assets) {
        setUserAssets(result.assets);
      }
    } else {
      await requestGalleryPermissions();
    }
  };

  const setUserPhoto = async () => {
    if (userAssets) {
      await dispatch(setPhotoToAnalize(userAssets));
    }
  };

  const checkIsPhoto = () => {
    if (userPhotoToAnalize) {
      setIsUploaded(true);
    } else {
      setIsUploaded(false);
    }
  };

  useEffect(() => {
    setUserPhoto();
  }, [userAssets]);

  useEffect(() => {
    checkIsPhoto();
  }, [userPhotoToAnalize]);

  useEffect(() => {
    checkPermissions();
  }, []);

  return (
    <View style={stylesSchema.container}>
      {isUploaded ? (
        <View style={stylesSchema.uploadedContainer}>
          <TextComponent
            styles={{
              ...textStyles.semiBold,
              fontSize: 22,
              textAlign: 'center',
            }}
          >
            Uploaded!
          </TextComponent>
        </View>
      ) : (
        <>
          <TouchableOpacity
            onPress={handleCameraClick}
            style={stylesSchema.contentContainer}
          >
            <View style={stylesSchema.imageContainer}>
              <Image
                source={Camera}
                style={stylesSchema.image}
              />
            </View>

            <TextComponent>Take a photo</TextComponent>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleGalleryClick}
            style={stylesSchema.contentContainer}
          >
            <View style={stylesSchema.imageContainer}>
              <Image
                source={Gallery}
                style={stylesSchema.image}
              />
            </View>

            <TextComponent
              styles={{
                ...textStyles.semiBold,
                fontSize: 16,
                textAlign: 'center',
              }}
            >
              Take a photo
            </TextComponent>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};
