import { useRef } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraFormat,
} from 'react-native-vision-camera';

import { useDispatch } from 'react-redux';
import { setPhotoToAnalize } from '../../../store/redux/features/dashboard/dashboardSlice';

import { ButtonComponent } from '../buttons/ButtonComponent';

import { textStyles } from '../../../constants/constantsStyle';

import { colors } from '../../../constants/constants';

import { styles } from './style';

export const CameraModal = ({
  isCameraVisible = false,
  setIsCameraVisible = () => {},
}) => {
  const stylesSchema = styles();

  const dispatch = useDispatch();

  const camera = useRef(null);
  const device = useCameraDevice('front');
  const format = useCameraFormat(device, [
    { photoAspectRatio: 4 / 3 },
    { photoResolution: { width: 1920, height: 1440 } },
  ]);

  const options = {
    quality: 0.9,
    skipMetadata: true,
  };

  const handleTakePhoto = async () => {
    try {
      if (camera?.current) {
        const photo = await camera.current.takePhoto(options);

        if (photo) {
          await dispatch(
            setPhotoToAnalize({
              ...photo,
              uri: `file://${photo.path}`,
              type: 'image/jpeg',
              fileName: 'photo.jpg',
            })
          );
        }

        setIsCameraVisible(false);
      }
    } catch (error) {
      console.error('Error taking photo:', error);
    }
  };

  return (
    <Modal
      visible={isCameraVisible}
      animationType="slide"
      transparent={false}
      onRequestClose={() => setIsCameraVisible(false)}
    >
      {device && (
        <Camera
          hotoQualityBalance="speed"
          format={format}
          photo={true}
          ref={camera}
          device={device}
          isActive={true}
          style={StyleSheet.absoluteFill}
        />
      )}

      <View style={stylesSchema.modalOverlay}>
        <ButtonComponent
          text={'Close'}
          isSmall
          handleClick={() => setIsCameraVisible(false)}
          stylesButton={{
            bgColor: colors.radioItemBg,
            bColor: colors.radioItemBg,
            textStyle: {
              ...textStyles.semiBold,
              color: colors.purpleColor,
              textTransform: 'uppercase',
            },
          }}
        />

        <ButtonComponent
          text={'Capture'}
          isSmall
          handleClick={handleTakePhoto}
        />
      </View>
    </Modal>
  );
};
