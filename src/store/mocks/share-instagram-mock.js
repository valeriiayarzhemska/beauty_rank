import WomanHearts from '../../assets/images/woman-hearts.png';
import { InstagramGradient } from '../../assets/icons/InstagramGradient';
import { ShareInstagramCard } from '../../components/quiz/ShareInstagramCard';
import { WelcomeResultCard } from '../../components/quiz/welcomeResult/WelcomeResultCard';

import { colors, fieldTypes } from '../../constants/constants';
import { textStyles } from '../../constants/constantsStyle';
import { validationSchema } from '../validationSchema';

export const valuesNamesInstagram = {
  Instagram: 'Instagram',
  Consent: 'Consent',
};

export const initialValues = {
  [valuesNamesInstagram.Instagram]: '',
  [valuesNamesInstagram.Consent]: '',
};

export const validationSchemaInstagram = {
  [valuesNamesInstagram.Instagram]: validationSchema.default,
  [valuesNamesInstagram.Consent]: validationSchema.default,
};

export const shareInstagramInputs = {
  [valuesNamesInstagram.Instagram]: {
    name: valuesNamesInstagram.Instagram,
    placeholder: 'www.instagram.com/',
    isLabelHidden: true,
    fieldType: fieldTypes.text,
    icon: InstagramGradient,
  },
  [valuesNamesInstagram.Consent]: {
    name: valuesNamesInstagram.Consent,
    fieldType: fieldTypes.radioList,
    radioList: [
      {
        id: 1,
        title: 'Yes',
        value: true,
      },
      {
        id: 2,
        title: 'No',
        value: false,
      },
    ],
    radioListStyle: {
      textStyle: { ...textStyles.medium, color: colors.secondPurpleColor },
      textColorSelected: colors.whiteColor,
      bgColor: colors.purpleBgColor,
      bgColorSelected: colors.secondPurpleColor,
    },
  },
};

export const mockAgreement = {
  id: 2,
  input: {
    id: 2,
    ...shareInstagramInputs[valuesNamesInstagram.Consent],
  },
  component: {
    componentCard: ShareInstagramCard,
    picture: WomanHearts,
    title: 'Do you agree to have your photo posted on our website?',
    warning: `If you choose 'No', your photo won’t be posted, and you won’t be able to participate in contests`,
  },
};

export const mock = [
  {
    id: 1,
    input: {
      id: 1,
      ...shareInstagramInputs[valuesNamesInstagram.Instagram],
    },
    component: {
      componentCard: ShareInstagramCard,
      pictureSize: { height: 256, width: 226 },
      title: 'Share your Instagram to feature it on our website',
    },
  },
  mockAgreement,
];

export const mockResult = [
  {
    id: 3,
    component: {
      componentCard: WelcomeResultCard,
    },
  },
];
