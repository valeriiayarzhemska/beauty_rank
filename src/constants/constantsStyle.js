import { Platform, StyleSheet } from 'react-native';
import { colors } from './constants';

export const textStyles = {
  light: {
    fontFamily: 'NunitoSansLight',
    fontSize: 16,
    fontWeight: 300,
    color: colors.blackColor,
  },
  regular: {
    fontFamily: 'NunitoSansRegular',
    fontSize: 16,
    fontWeight: 400,
    color: colors.blackColor,
  },
  medium: {
    fontFamily: 'NunitoSansMedium',
    fontSize: 16,
    fontWeight: 500,
    color: colors.blackColor,
  },
  semiBold: {
    fontFamily: 'NunitoSansSemiBold',
    fontSize: 16,
    fontWeight: 600,
    color: colors.blackColor,
  },
  bold: {
    fontFamily: 'NunitoSansBold',
    fontSize: 16,
    fontWeight: 700,
    color: colors.blackColor,
  },
  black: {
    fontFamily: 'NunitoSansBlack',
    fontSize: 16,
    fontWeight: 900,
    color: colors.blackColor,
  },
};

export const defaultInputStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 54,
    width: '100%',
    height: 62,
    fontSize: 16,
    color: colors.grayColor,
    borderWidth: 1,
    backgroundColor: colors.whiteColor,
    borderRadius: 50,
  },
  containerPadding: {
    paddingTop: 24,
    paddingBottom: 14,
  },
  containerSquare: {
    flex: 1,
    paddingHorizontal: 16,
    width: '100%',
    height: 50,
    fontSize: 16,
    color: colors.grayColor,
    borderWidth: 1,
    backgroundColor: colors.whiteColor,
    borderRadius: 10,
  },
  containerSquarePadding: {
    paddingTop: 20,
    paddingBottom: 9,
  },
  containerSquareWithoutLabel: {
    flex: 1,
    width: '100%',
    height: 50,
    fontSize: 16,
    color: colors.grayColor,
    borderWidth: 1,
    backgroundColor: colors.whiteColor,
    borderRadius: 10,
  },
  containerSquareWithoutLabelPadding: {
    paddingTop: 14,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  containerWithoutLabel: {
    flex: 1,
    paddingHorizontal: 54,
    width: '100%',
    height: 52,
    fontSize: 16,
    color: colors.grayColor,
    borderWidth: 1,
    backgroundColor: colors.whiteColor,
    borderRadius: 50,
  },
  containerWithoutLabelPadding: {
    paddingTop: Platform.OS === 'android' ? 10 : 18,
    paddingBottom: Platform.OS === 'android' ? 10 : 16,
  },
  focus: {
    borderColor: colors.purpleColor,
    outlineStyle: 'none',
    ringWidth: 0,
  },
  unfocused: {
    borderColor: colors.lightGrayColor,
  },
});

export const imageStyles = {
  contain: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  cover: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  fill: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'fill',
  },
};
