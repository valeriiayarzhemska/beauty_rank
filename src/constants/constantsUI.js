import { Apple } from '../assets/icons/Apple';
import { Facebook } from '../assets/icons/Facebook';
import { Google } from '../assets/icons/Google';

import WomanReview from '../assets/images/woman-review.png';
import WomanReview2 from '../assets/images/woman-review2.png';
import ManReview from '../assets/images/man-review.jpeg';

import Makeup from '../assets/images/makeup-woman.png';
import Hairstyle from '../assets/images/hairstyle-woman.png';
import Manicure from '../assets/images/manicure.png';
import Colors from '../assets/images/colors.png';
import Clothing from '../assets/images/clothing.png';
import Accessories from '../assets/images/accessories.png';
import { Trash } from '../assets/icons/Trash';

import { colors } from './constants';
import { textStyles } from './constantsStyle';

export const authButtonsText = {
  Google: 'Google',
  Apple: 'Apple',
  Facebook: 'Facebook',
};

export const authButtons = [
  {
    id: 1,
    text: authButtonsText.Google,
    icon: Google,
    isSmall: true,
    stylesButton: {
      bgColor: colors.whiteColor,
      bColor: colors.lightPurpleColor,
      textStyle: {
        ...textStyles.semiBold,
        fontSize: 14,
        color: colors.grayColor,
      },
    },
  },
  {
    id: 2,
    text: authButtonsText.Apple,
    icon: Apple,
    isSmall: true,
    stylesButton: {
      bgColor: colors.blackColor,
      bColor: colors.blackColor,
      textStyle: {
        ...textStyles.semiBold,
        fontSize: 14,
        color: colors.whiteColor,
      },
    },
  },
  {
    id: 3,
    text: authButtonsText.Facebook,
    icon: Facebook,
    isSmall: true,
    stylesButton: {
      bgColor: colors.blueColor,
      bColor: colors.blueColor,
      textStyle: {
        ...textStyles.semiBold,
        fontSize: 14,
        color: colors.whiteColor,
      },
    },
  },
];

export const welcomeResultCard = [
  { id: 1, emoji: '😃', text: 'Emotion' },
  { id: 2, emoji: '🎂', text: 'Age by photo' },
  { id: 3, emoji: '🥇', text: 'Place in global ranking' },
];

export const errorMessages = {
  wentWrong: 'Something went wrong',
  login: 'Wrong credentials',
  data: 'An error occurred while fetching a data',
  noData: 'No items available',
};

export const ageSelectData = [
  { value: 1, label: 'Under 18' },
  { value: 2, label: '19-25' },
  { value: 3, label: '26-35' },
  { value: 4, label: '36-44' },
  { value: 5, label: '45-59' },
  { value: 6, label: 'Over 60' },
];

export const jobSelectData = [
  {
    value: 'Medical professional (doctor, nurse, etc.)',
    label: 'Medical professional (doctor, nurse, etc.)',
  },
  {
    value: 'Education and science (teacher, professor, scientist)',
    label: 'Education and science (teacher, professor, scientist)',
  },
  {
    value: 'Engineering (engineer, architect)',
    label: 'Engineering (engineer, architect)',
  },
  {
    value: 'Arts and entertainment (artist, musician, actor)',
    label: 'Arts and entertainment (artist, musician, actor)',
  },
  {
    value: 'Business and management (manager, entrepreneur)',
    label: 'Business and management (manager, entrepreneur)',
  },
  {
    value: 'Information technology (programmer, system administrator)',
    label: 'Information technology (programmer, system administrator)',
  },
  {
    value: 'Finance and accounting (financial analyst, accountant)',
    label: 'Finance and accounting (financial analyst, accountant)',
  },
  {
    value: 'Sales and marketing (salesperson, marketer)',
    label: 'Sales and marketing (salesperson, marketer)',
  },
  {
    value: 'Service industry (waiter, bartender)',
    label: 'Service industry (waiter, bartender)',
  },
  {
    value: 'Sports and fitness (athlete, coach)',
    label: 'Sports and fitness (athlete, coach)',
  },
];

export const beautyPlanFinishData = [
  'Analyzing your answers',
  'Creating your ideal schedule',
  'Your plan is almost ready',
  'Done!',
];

export const loadingText = {
  analize: 'Analyzing your photo...',
  done: '100%',
  error: 'The analysis didn’t complete. Try again!',
};

export const reviews = [
  {
    id: 1,
    name: 'Aisha',
    image: WomanReview,
    text: `I'm stoked! The results have been a source of inspiration.`,
  },
  {
    id: 2,
    name: 'Emily',
    image: WomanReview2,
    text: `This service is a real find! Thanks for the accuracy and professionalism!`,
  },
  {
    id: 3,
    name: 'Jacob',
    image: ManReview,
    text: `I’m more beautiful than the average in my country!`,
  },
  {
    id: 4,
    name: 'Aisha',
    image: WomanReview,
    text: `I'm stoked! The results have been a source of inspiration.`,
  },
  {
    id: 5,
    name: 'Emily',
    image: WomanReview2,
    text: `This service is a real find! Thanks for the accuracy and professionalism!`,
  },
  {
    id: 6,
    name: 'Jacob',
    image: ManReview,
    text: `I’m more beautiful than the average in my country!`,
  },
];

export const featuresSubscription = [
  'Personalized Beauty Score with unlimited checks',
  'Daily beauty tips to enhance your routine',
  'Automatic routine planning and reminders',
  'Track beauty progress over time',
  'Personalized calendar to manage treatments',
  'Global ranking and monthly contests',
  'Latest beauty trends and expert advice',
  'Share your results on Instagram and our site',
];

export const toggleGender = [
  { id: 2, value: 1, title: 'Man' },
  { id: 3, value: 2, title: 'Woman' },
];

export const toggleGenderAll = [
  { id: 1, value: 'all', title: 'All' },
  ...toggleGender,
];

export const trends = [
  {
    id: 1,
    title: 'Make-up',
    link: 'https://blog.beauty-mirror.com/posts/frosted-glow-makeup-trends-for-winter-2024-2025',
    image: Makeup,
  },
  {
    id: 2,
    title: 'Hairstyles',
    link: 'https://blog.beauty-mirror.com/posts/fresh-looks-trendy-haircuts-for-winter-2024-2025',
    image: Hairstyle,
  },
  {
    id: 3,
    title: 'Manicure',
    link: 'https://blog.beauty-mirror.com/posts/winter-elegance-top-nail-trends-for-2024-2025',
    image: Manicure,
  },
  {
    id: 4,
    title: 'Colours',
    link: 'https://blog.beauty-mirror.com/posts/winter-harmony-trendy-color-palettes-for-2024-2025',
    image: Colors,
  },
  {
    id: 5,
    title: 'Clothing',
    link: 'https://blog.beauty-mirror.com/posts/layered-perfection-winter-fashion-trends-2024-2025',
    image: Clothing,
  },
  {
    id: 6,
    title: 'Accessories',
    link: 'https://blog.beauty-mirror.com/posts/the-power-of-details-winter-accessories-2024-2025',
    image: Accessories,
  },
];

export const profileSettings = [
  {
    id: 1,
    title: 'Edit Questionnaire',
    link: 'EditQuestionnaire',
  },
  {
    id: 2,
    title: 'Edit Account Details',
    link: 'EditAccount',
  },
  {
    id: 3,
    title: 'Edit Beauty Routines',
    link: 'BeautyPlan',
  },
  {
    id: 4,
    title: 'Beauty Blog',
    isBrowserLink: true,
    link: 'https://blog.beauty-mirror.com/',
  },
  /* {
    id: 5,
    title: 'Notifications',
    link: '',
  },
  {
    id: 6,
    title: 'Change language',
    link: '',
  }, */
  {
    id: 7,
    title: 'Log Out',
    link: 'LogOut',
  },
  {
    id: 8,
    title: 'Delete Account',
    link: 'DeleteAccount',
    isRed: true,
    icon: Trash,
  },
  {
    id: 9,
    title: 'Data deletion request',
    isRed: true,
    isBrowserLink: true,
    link: 'https://forms.gle/YNKbFTRn7HRZcMMA6',
  },
];
