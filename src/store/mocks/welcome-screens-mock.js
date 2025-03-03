import { GoalCard } from '../../components/quiz/GoalCard';
import { GoalPrivacyCard } from '../../components/quiz/GoalPrivacyCard';
import Phone from '../../assets/images/people-phone.png';

import { colors, fieldTypes } from '../../constants/constants';
import { textStyles } from '../../constants/constantsStyle';
import { validationSchema } from '../validationSchema';

export const initialValues = {
  goal: '',
};

export const validationSchemaWelcome = {
  goal: validationSchema.arrayNumbers,
};

const goalsSelectData = [
  {
    id: 1,
    title: 'Plan your beauty routines',
    value: 1,
  },
  {
    id: 2,
    title: 'Assess your appearance',
    value: 2,
  },
  {
    id: 3,
    title: 'Track changes in your appearance',
    value: 3,
  },
  {
    id: 4,
    title: 'Get daily beauty tips and trends',
    value: 4,
  },
  {
    id: 5,
    title: 'See your rank in global beauty',
    value: 5,
  },
];

export const mock = [
  {
    id: 1,
    inputs: [
      {
        id: 1,
        name: 'goal',
        fieldType: fieldTypes.radioListMulti,
        isFull: true,
        radioList: goalsSelectData,
        radioListStyle: {
          textStyle: { ...textStyles.medium, color: colors.secondPurpleColor },
          textColorSelected: colors.whiteColor,
          bgColor: colors.radioItemBg,
          bgColorSelected: colors.secondPurpleColor,
        },
      },
    ],
    component: {
      componentCard: GoalCard,
      picture: Phone,
      title: 'What goal do you want to achieve with Beauty Mirror?',
    },
  },
  {
    id: 2,
    component: {
      componentCard: GoalPrivacyCard,
    },
  },
];
