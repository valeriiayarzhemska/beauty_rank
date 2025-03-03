import { StyleSheet } from 'react-native';

import { colors } from '../../../../constants/constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 62,
      width: '100%',
    },
    iconWrapper: {
      position: 'absolute',
      left: 20,
      zIndex: 1,
    },
    arrowIcon: {
      position: 'absolute',
      right: 20,
      zIndex: 1,
    },
    input: {
      flex: 1,
      maxFontSizeMultiplier: 1,
      allowFontScaling: false,
    },
    errorInput: {
      borderColor: colors.redColor,
      borderWidth: 1,
    },
    errorText: {
      position: 'absolute',
      bottom: -18,
      fontSize: 10,
      color: colors.redColor,
    },
  });
};

export const defaultStylesSelect = {
  inputIOS: {
    paddingHorizontal: 54,
    width: '100%',
    fontSize: 16,
    color: colors.grayColor,
    borderWidth: 1,
    backgroundColor: colors.whiteColor,
    borderRadius: 50,
    outlineStyle: 'none',
    ringWidth: 0,
    maxFontSizeMultiplier: 1,
    allowFontScaling: false,
  },
  inputIOSFocus: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  inputIOSUnfocus: {
    paddingTop: 27,
    paddingBottom: 14,
  },
  inputAndroid: {
    paddingHorizontal: 54,
    width: '100%',
    fontSize: 16,
    color: colors.grayColor,
    borderWidth: 1,
    backgroundColor: colors.whiteColor,
    borderRadius: 50,
    outlineStyle: 'none',
    ringWidth: 0,
    maxFontSizeMultiplier: 1,
    allowFontScaling: false,
  },
  inputAndroidFocus: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  inputAndroidUnfocus: {
    paddingTop: 27,
    paddingBottom: 14,
  },
};

const otherDefaultStyles = {
  inputIOSContainer: {
    width: '100%',
  },
  viewContainer: {
    width: '100%',
    maxFontSizeMultiplier: 1,
    allowFontScaling: false,
  },
  headlessAndroidContainer: {
    width: '100%',
    maxFontSizeMultiplier: 1,
    allowFontScaling: false,
  },
  inputAndroidContainer: {
    minWidth: '100%',
    maxWidth: '100%',
  },
  iconContainer: {
    top: 20,
    right: 10,
  },
};

export const stylesSelectError = StyleSheet.create({
  inputIOS: {
    ...defaultStylesSelect.inputIOS,
    ...defaultStylesSelect.inputIOSFocus,
    borderColor: colors.redColor,
  },
  inputAndroid: {
    ...defaultStylesSelect.inputAndroid,
    ...defaultStylesSelect.inputAndroidFocus,
    borderColor: colors.redColor,
  },
  ...otherDefaultStyles,
});

export const stylesSelectUnfocus = StyleSheet.create({
  inputIOS: {
    ...defaultStylesSelect.inputIOS,
    ...defaultStylesSelect.inputIOSFocus,
    borderColor: colors.lightGrayColor,
  },
  inputAndroid: {
    ...defaultStylesSelect.inputAndroid,
    ...defaultStylesSelect.inputAndroidFocus,
    borderColor: colors.lightGrayColor,
  },
  ...otherDefaultStyles,
});

export const stylesSelectSelected = StyleSheet.create({
  inputIOS: {
    ...defaultStylesSelect.inputIOS,
    ...defaultStylesSelect.inputIOSUnfocus,
    borderColor: colors.lightGrayColor,
  },
  inputAndroid: {
    ...defaultStylesSelect.inputAndroid,
    ...defaultStylesSelect.inputAndroidUnfocus,
    borderColor: colors.lightGrayColor,
  },
  ...otherDefaultStyles,
});
