import { Dimensions, Platform } from 'react-native';

export const keyNameSubscription = 'Basic';

export const colors = {
  radioItemBg: '#F7EFFA',
  lightVioletColor: '#D274DF',
  violetColor: '#CA11BB',
  secondVioletColor: '#543578',
  purpleBgColor: '#F9EEF9',
  secondPurpleBgColor: '#F1EFF9',
  lightPurpleColor: '#D4CCDD',
  secondLightPurpleColor: '#EBB1EB',
  thirdLightPurpleColor: '#F7F6FB',
  purpleColor: '#8A6EDA',
  secondPurpleColor: '#BE72DD',
  thirdPurpleColor: '#5A4572',
  blackColor: '#332B3C',
  whiteColor: '#ffffff',
  darkerWhiteColor: '#FCFBFF',
  lightGrayColor: '#E9E8EA',
  secondLightGrayColor: '#AEAEB2',
  thirdLightGrayColor: '#f5f0fa',
  grayColor: '#515151',
  darkGrayColor: '#98949C',
  blueColor: '#1877F2',
  redColor: '#FF0000',
  borderPurple: '#3D3446',
  secondOrangeColor: '#F29900',
  orangeColor: '#FABB05',
  brownColor: '#765B5B',
  darkOrangeColor: '#B28400',
  yellowColor: '#FFDD55',
  greenColor: '#42A406',
  textLightPurple: '#DCBFEF',
  grayCounters: '#98929F',
  manBgGradient: ['#8A6EDA', '#A16EDA', '#BE72DD', '#EBB1EB'],
  womanBgGradient: ['#EBB1EB', '#BE72DD', '#A16EDA', '#8A6EDA'],
  manBgTopText: ['#8A6EDA', '#B76EDA', '#DB75E0', '#EBB1EB'],
  womanBgTopText: ['#BA426D', '#F76398'],
};

export const screenHeight = Dimensions.get('screen').height;
export const windowHeight = Dimensions.get('window').height;
export const windowWidth = Dimensions.get('window').width;
export const containerWidth = windowWidth - (windowWidth / 100) * 12;

export const cardHeights = {
  welcomeQuizForm:
    windowHeight < 760
      ? Platform.OS === 'android'
        ? windowHeight - 230
        : windowHeight - 210
      : 500,
  beautyPlan:
    windowHeight < 760
      ? Platform.OS === 'android'
        ? windowHeight - 160
        : windowHeight - 120
      : 656,
  beautyPlanScale:
    windowHeight < 760
      ? Platform.OS === 'android'
        ? windowHeight - 190
        : windowHeight - 150
      : 620,
};

export const fieldTypes = {
  text: 'text',
  select: 'select',
  multiselect: 'multiselect',
  toggle: 'toggle',
  radioList: 'radioList',
  radioListMulti: 'radioListMulti',
  checkbox: 'checkbox',
  checkboxList: 'checkboxList',
  range: 'range',
  textarea: 'textarea',
  textareaDefaultValue: 'textareaDefaultValue',
  date: 'date',
};

export const beautyRangeTypes = {
  days: 'days',
  weeks: 'weeks',
  months: 'months',
};

export const authProviders = {
  Google: 'google.com',
  Facebook: 'facebook.com',
  Apple: 'apple.com',
};

export const termsLinks = {
  terms: 'https://beauty-mirror.com/terms-of-service.html',
  privacy: 'https://beauty-mirror.com/privacy-policy.html',
};
