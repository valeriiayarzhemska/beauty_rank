import {
  request,
  check,
  openSettings,
  PERMISSIONS,
  RESULTS,
} from 'react-native-permissions';
import { Platform, Alert } from 'react-native';

export async function checkCameraPermission() {
  const cameraPermission =
    Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA;

  const cameraStatus = await check(cameraPermission);
  if (cameraStatus !== RESULTS.GRANTED) {
    return false;
  }

  return true;
}

export async function checkGalleryPermission() {
  const photoPermission =
    Platform.OS === 'ios'
      ? PERMISSIONS.IOS.PHOTO_LIBRARY
      : Platform.Version >= 33
      ? PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
      : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;

  const photoStatus = await check(photoPermission);
  
  if (photoStatus !== RESULTS.GRANTED) {
    return false;
  }

  return true;
}

export async function requestAndroidPermission() {
  if (Platform.OS === 'android' && Platform.Version <= 28) {
    const storagePermission = await request(
      PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE
    );

    if (
      storagePermission === RESULTS.DENIED ||
      storagePermission === RESULTS.BLOCKED
    ) {
      Alert.alert(
        'Storage Permission Needed',
        'We need storage permission to save the photo to your gallery. Please enable it in settings.',
        [{ text: 'OK' }]
      );
      return false;
    }
  }

  return true;
}

export async function requestCameraPermissions() {
  const cameraPermission = await request(
    Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA
  );

  if (
    cameraPermission === RESULTS.DENIED ||
    cameraPermission === RESULTS.BLOCKED
  ) {
    Alert.alert(
      'Camera Permission Required',
      'We need access to your camera to continue. Please enable camera access in settings.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Open Settings', onPress: openSettings },
      ]
    );
  }

  if (Platform.OS === 'android' && Platform.Version <= 28) {
    const storagePermission = await request(
      PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE
    );

    if (
      storagePermission === RESULTS.DENIED ||
      storagePermission === RESULTS.BLOCKED
    ) {
      Alert.alert(
        'Storage Permission Needed',
        'We need storage permission to save the photo to your gallery. Please enable it in settings.',
        [{ text: 'OK' }]
      );
      return false;
    }
  }

  requestAndroidPermission();

  return true;
}

export async function requestGalleryPermissions() {
  const photoPermission = await request(
    Platform.OS === 'ios'
      ? PERMISSIONS.IOS.PHOTO_LIBRARY
      : Platform.Version >= 33
      ? PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
      : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
  );

  if (
    photoPermission === RESULTS.DENIED ||
    photoPermission === RESULTS.BLOCKED
  ) {
    Alert.alert(
      'Photo Library Permission Required',
      'We need access to your photo library to continue. Please enable photo library access in settings.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Open Settings', onPress: openSettings },
      ]
    );
    return false;
  }

  requestAndroidPermission();

  return true;
}
