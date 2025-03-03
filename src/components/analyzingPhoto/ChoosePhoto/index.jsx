import { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import FastImage from 'react-native-fast-image';

import { useDispatch, useSelector } from 'react-redux';
import { setPhotoToAnalize } from '../../../store/redux/features/dashboard/dashboardSlice';
import { selectPhotoToAnalize } from '../../../store/redux/features/dashboard/dashboardSelectors';

import { TextComponent } from '../../ui/TextComponent';

import CameraImage from '../../../assets/images/take-photo.png';
import Gallery from '../../../assets/images/select-photo.png';
import { CameraModal } from '../../ui/CameraModal';

import { textStyles } from '../../../constants/constantsStyle';
import {
  checkCameraPermission,
  checkGalleryPermission,
  requestCameraPermissions,
  requestGalleryPermissions,
} from '../../../utils/permissions';

import { styles } from './style';

export const ChoosePhoto = ({ navigation, isApplied }) => {
  const stylesSchema = styles();

  const dispatch = useDispatch();
  const userPhotoToAnalize = useSelector(selectPhotoToAnalize);

  const [cameraPermission, setCameraPermission] = useState(false);
  const [galleryPermission, setGalleryPermission] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [isFirstLoading, setIsFirstLoading] = useState(true);
  const [isCameraVisible, setIsCameraVisible] = useState(false);

  const options = {
    quality: 0.7,
    skipMetadata: true,
  };

  const checkPermissions = async () => {
    const isGrantedCamera = await checkCameraPermission();
    const isGrantedGallery = await checkGalleryPermission();

    setCameraPermission(isGrantedCamera);
    setGalleryPermission(isGrantedGallery);
  };

  const handleCameraClick = async () => {
    if (cameraPermission) {
      setIsCameraVisible(true);
    } else {
      await requestCameraPermissions();
      await checkPermissions();
    }
  };

  const handleGalleryClick = async () => {
    if (galleryPermission) {
      const result = await launchImageLibrary(options);

      if (result?.assets) {
        await dispatch(setPhotoToAnalize(result.assets[0]));
      }
    } else {
      await requestGalleryPermissions();
      await checkPermissions();
    }
  };

  const checkIsPhoto = () => {
    if (userPhotoToAnalize) {
      setIsUploaded(true);
    } else {
      setIsUploaded(false);
    }
  };

  const resetPhoto = () => {
    dispatch(setPhotoToAnalize(null));

    setIsFirstLoading(false);
  };

  useEffect(() => {
    checkIsPhoto();
  }, [userPhotoToAnalize]);

  useEffect(() => {
    if (isFirstLoading) {
      resetPhoto();
    }
  }, []);

  useEffect(() => {
    checkPermissions();
  }, []);

  return (
    <>
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
                <FastImage
                  source={CameraImage}
                  style={stylesSchema.image}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>

              <TextComponent>Take a photo</TextComponent>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleGalleryClick}
              style={stylesSchema.contentContainer}
            >
              <View style={stylesSchema.imageContainer}>
                <FastImage
                  source={Gallery}
                  style={stylesSchema.image}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>

              <TextComponent>Choose a photo</TextComponent>
            </TouchableOpacity>
          </>
        )}
      </View>

      <CameraModal
        isCameraVisible={isCameraVisible}
        setIsCameraVisible={setIsCameraVisible}
      />
    </>
  );
};
