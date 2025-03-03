import { StyleSheet } from 'react-native';
import { colors } from '../../../../../constants/constants';

const THUMB_RADIUS_LOW = 10;
const THUMB_RADIUS_HIGH = 16;

export const styles = color => {
  return StyleSheet.create({
    container: {
      padding: 12,
    },
    rootLow: {
      width: THUMB_RADIUS_LOW * 2,
      height: THUMB_RADIUS_LOW * 2,
      borderRadius: THUMB_RADIUS_LOW,
      borderWidth: 4,
      borderColor: color,
      backgroundColor: colors.whiteColor,
    },
    rootHigh: {
      width: THUMB_RADIUS_HIGH * 2,
      height: THUMB_RADIUS_HIGH * 2,
      borderRadius: THUMB_RADIUS_HIGH,
      borderWidth: 4,
      borderColor: color,
      backgroundColor: colors.whiteColor,
    },
  });
};
