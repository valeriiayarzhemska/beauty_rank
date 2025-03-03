import { WelcomeQuizCard } from '../../components/quiz/WelcomeQuizCard';

import Woman from '../../assets/images/woman-picture.png';
import Man from '../../assets/images/man-picture.png';
import ManTab from '../../assets/images/man-table.png';
import Bicycles from '../../assets/images/bicycles.png';
import WomanLaptop from '../../assets/images/woman-laptop.png';
import WomanDiagram from '../../assets/images/woman-diagram.png';
import { UserEdit } from '../../assets/icons/UserEdit';
import { UserLines } from '../../assets/icons/UserLines';
import { Globus } from '../../assets/icons/Globus';
import { Suitcase } from '../../assets/icons/Suitcase';

import { colors, fieldTypes } from '../../constants/constants';
import { textStyles } from '../../constants/constantsStyle';
import { countries } from '../../constants/countries';
import { ageSelectData, jobSelectData } from '../../constants/constantsUI';

import { validationSchema } from '../validationSchema';

export const valuesNames = {
  Gender: 'Gender',
  Name: 'Name',
  Country: 'Country',
  Age: 'Age',
  Profession: 'Profession',
};

export const initialValues = {
  [valuesNames.Gender]: '',
  [valuesNames.Name]: '',
  [valuesNames.Country]: '',
  [valuesNames.Age]: '',
  [valuesNames.Profession]: '',
};

export const validationSchemaQuiz = {
  [valuesNames.Gender]: validationSchema.default,
  [valuesNames.Name]: validationSchema.default,
  [valuesNames.Country]: validationSchema.default,
  [valuesNames.Age]: validationSchema.default,
  [valuesNames.Profession]: validationSchema.default,
};

export const registerInputs = {
  [valuesNames.Name]: {
    placeholder: 'Your name or nickname',
    name: valuesNames.Name,
    fieldType: fieldTypes.text,
    icon: UserEdit,
  },
  [valuesNames.Country]: {
    placeholder: 'Country',
    name: valuesNames.Country,
    fieldType: fieldTypes.select,
    selectData: countries,
    icon: Globus,
  },
  [valuesNames.Age]: {
    placeholder: 'Age',
    name: valuesNames.Age,
    fieldType: fieldTypes.select,
    selectData: ageSelectData,
    icon: UserLines,
  },
  [valuesNames.Profession]: {
    placeholder: 'Profession',
    name: valuesNames.Profession,
    fieldType: fieldTypes.select,
    selectData: jobSelectData,
    icon: Suitcase,
  },
};

export const mockEdit = [];

export const mock = [
  {
    id: 1,
    input: {
      id: 1,
      name: valuesNames.Gender,
      fieldType: fieldTypes.radioList,
      radioList: [
        {
          id: 1,
          title: 'Man',
          value: 0,
        },
        {
          id: 2,
          title: 'Woman',
          value: 1,
        },
      ],
      radioListStyle: {
        textStyle: { ...textStyles.medium, color: colors.darkGrayColor },
        textColorSelected: colors.whiteColor,
        bgColor: colors.lightGrayColor,
        bgColorSelected: colors.secondPurpleColor,
      },
    },
    component: {
      componentCard: WelcomeQuizCard,
      pictures: [Man, Woman],
      isLeft: true,
      title: 'Welcome 👋',
      subtitle: 'Let us know a bit about you!',
      description: 'Select your gender to begin.',
    },
  },
  {
    id: 2,
    input: {
      id: 2,
      ...registerInputs[valuesNames.Name],
    },
    component: {
      componentCard: WelcomeQuizCard,
      picture: ManTab,
      title: 'How should we call you?',
    },
  },
  {
    id: 3,
    input: {
      id: 3,
      ...registerInputs[valuesNames.Country],
    },
    component: {
      componentCard: WelcomeQuizCard,
      picture: Bicycles,
      title: 'Where are you from?',
      hasName: true,
    },
  },
  {
    id: 4,
    input: {
      id: 4,
      ...registerInputs[valuesNames.Age],
    },
    component: {
      componentCard: WelcomeQuizCard,
      picture: WomanLaptop,
      title: `What's your age?`,
    },
  },
  {
    id: 5,
    input: {
      id: 5,
      ...registerInputs[valuesNames.Profession],
    },
    component: {
      componentCard: WelcomeQuizCard,
      picture: WomanDiagram,
      title: `What's your job?`,
    },
  },
];
