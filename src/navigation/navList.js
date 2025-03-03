import { TransitionPresets } from '@react-navigation/stack';

import { Registration } from '../screens/Registration';
import { Welcome } from '../screens/Welcome';
import { Login } from '../screens/Login';
import { ResetPassword } from '../screens/ResetPassword';
import { ConfirmPassword } from '../screens/ConfirmPassword';
import { WelcomeQuiz } from '../screens/WelcomeQuiz';
import { BeautyPlan } from '../screens/BeautyPlan';
import { ShareInstagram } from '../screens/ShareInstagram';
import { AnalizePhoto } from '../screens/AnalizePhoto';
import { WelcomeBeautyPlan } from '../screens/WelcomeBeautyPlan';
import { WelcomeResult } from '../screens/WelcomeResult';
import { RatingLocked } from '../screens/RatingLocked';
import { UploadAnalizePhoto } from '../screens/UploadAnalizePhoto';
import { Subscription } from '../screens/Subscription';
import { Rating } from '../screens/Rating';
import { RatingInfo } from '../screens/RatingInfo';
import { WelcomeScreens } from '../screens/WelcomeScreens';
import { WelcomeSelfCare } from '../screens/WelcomeSelfCare';

import { MainScreens } from '../components/ui/tabsNav/MainScreens';
import { HistoryScreens } from '../components/ui/tabsNav/HistoryScreens';
import { TipsScreens } from '../components/ui/tabsNav/TipsScreens';
import { ProfileScreens } from '../components/ui/tabsNav/ProfileScreens';
import { PhotoAnalysisScreens } from '../components/ui/tabsNav/PhotoAnalysisScreens';

import { MainIcon } from '../assets/icons/MainIcon';
import { TipsIcon } from '../assets/icons/TipsIcon';
import { HistoryIcon } from '../assets/icons/HistoryIcon';
import { ProfileIcon } from '../assets/icons/ProfileIcon';

export const verticalAnimation = {
  headerShown: false,
  gestureDirection: 'vertical',
  ...TransitionPresets.ModalSlideFromBottomIOS,
  ...TransitionPresets.RevealFromBottomAndroid,
};

export const stackScreenData = [
  {
    id: 1,
    name: 'Welcome',
    component: Welcome,
    isAuthorized: false,
    options: {
      headerShown: false,
      animation: 'none',
    },
  },
  {
    id: 2,
    name: 'Login',
    component: Login,
    isAuthorized: false,
    options: verticalAnimation,
  },
  {
    id: 3,
    name: 'ResetPassword',
    component: ResetPassword,
    isAuthorized: false,
    options: {
      headerShown: false,
      animation: 'none',
    },
  },
  {
    id: 4,
    name: 'ConfirmPassword',
    component: ConfirmPassword,
    isAuthorized: false,
    options: {
      headerShown: false,
      animation: 'none',
    },
  },
  {
    id: 5,
    name: 'Registration',
    component: Registration,
    isAuthorized: false,
    options: verticalAnimation,
  },
  {
    id: 6,
    name: 'WelcomeScreens',
    component: WelcomeScreens,
    isAuthorized: false,
    options: {
      headerShown: false,
      animation: 'none',
    },
  },
  {
    id: 7,
    name: 'WelcomeQuiz',
    component: WelcomeQuiz,
    isAuthorized: false,
    options: {
      headerShown: false,
      animation: 'none',
    },
  },
  {
    id: 8,
    name: 'WelcomeSelfCare',
    component: WelcomeSelfCare,
    isAuthorized: false,
    options: {
      headerShown: false,
      animation: 'none',
    },
  },
  {
    id: 9,
    name: 'WelcomeBeautyPlan',
    component: WelcomeBeautyPlan,
    isAuthorized: false,
    options: {
      headerShown: false,
      animation: 'none',
    },
  },
  {
    id: 10,
    name: 'BeautyPlan',
    component: BeautyPlan,
    isAuthorized: false,
    options: {
      headerShown: false,
      animation: 'none',
    },
  },
  {
    id: 11,
    name: 'ShareInstagram',
    component: ShareInstagram,
    isAuthorized: false,
    options: {
      headerShown: false,
      animation: 'none',
    },
  },
  {
    id: 12,
    name: 'WelcomeResult',
    component: WelcomeResult,
    isAuthorized: false,
    options: {
      headerShown: false,
      animation: 'none',
    },
  },
  {
    id: 13,
    name: 'UploadAnalizePhoto',
    component: UploadAnalizePhoto,
    isAuthorized: true,
    options: {
      headerShown: false,
      animation: 'none',
    },
  },
  {
    id: 14,
    name: 'AnalizePhoto',
    component: AnalizePhoto,
    isAuthorized: true,
    options: {
      headerShown: false,
      animation: 'none',
    },
  },
  {
    id: 15,
    name: 'RatingLocked',
    component: RatingLocked,
    isAuthorized: true,
    options: {
      headerShown: false,
      animation: 'none',
    },
  },
  {
    id: 16,
    name: 'Subscription',
    component: Subscription,
    isAuthorized: true,
    options: {
      headerShown: false,
      animation: 'none',
    },
  },
  {
    id: 17,
    name: 'Rating',
    component: Rating,
    isAuthorized: true,
    options: {
      headerShown: false,
      animation: 'none',
    },
  },
  {
    id: 18,
    name: 'RatingInfo',
    component: RatingInfo,
    isAuthorized: true,
    options: {
      headerShown: false,
      animation: 'none',
    },
  },
  {
    id: 19,
    name: 'Login',
    component: Login,
    isAuthorized: true,
    options: verticalAnimation,
  },
  {
    id: 20,
    name: 'ResetPassword',
    component: ResetPassword,
    isAuthorized: true,
    options: {
      headerShown: false,
      animation: 'none',
    },
  },
  {
    id: 21,
    name: 'ConfirmPassword',
    component: ConfirmPassword,
    isAuthorized: true,
    options: {
      headerShown: false,
      animation: 'none',
    },
  },
  /* {
    id: 19,
    name: 'WelcomeLoader',
    component: WelcomeLoader,
    isAuthorized: true,
    options: {
      headerShown: false,
      animation: 'none',
    },
  }, */
  /* {
    id: 18,
    name: 'PersonalStatistics',
    component: PersonalStatistics,
    isAuthorized: true,
    options: {
      headerShown: false,
      animation: 'none',
    },
  }, */
  /* {
    id: 13,
    name: 'Main',
    component: Main,
    isAuthorized: true,
    options: {
      headerShown: false,
      animation: 'none',
    },
  }, */
];

export const tabs = [
  {
    id: 1,
    icon: MainIcon,
    name: 'MainScreens',
    component: MainScreens,
  },
  {
    id: 2,
    icon: TipsIcon,
    name: 'TipsScreens',
    component: TipsScreens,
  },
  {
    id: 3,
    name: 'PhotoAnalysisScreens',
    component: PhotoAnalysisScreens,
  },
  {
    id: 4,
    icon: HistoryIcon,
    name: 'HistoryScreens',
    component: HistoryScreens,
  },
  {
    id: 5,
    icon: ProfileIcon,
    name: 'ProfileScreens',
    component: ProfileScreens,
  },
];
