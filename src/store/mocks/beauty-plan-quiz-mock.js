import { BeautyPlanCard } from '../../components/quiz/BeautyPlanCard';
import { BeautyPlanDateCard } from '../../components/quiz/BeautyPlanDateCard';
import { BeautyPlanRangeCard } from '../../components/quiz/BeautyPlanRangeCard';

import { CalendarIcon } from '../../assets/icons/CalendarIcon';
import { Wallet } from '../../assets/icons/Wallet';

import { validationSchema } from '../validationSchema';

import {
  beautyRangeTypes,
  colors,
  fieldTypes,
} from '../../constants/constants';
import { textStyles } from '../../constants/constantsStyle';
import { currencies } from '../../constants/currencies';

export const beautyValuesNames = {
  procedures: 'procedures',
  currency: 'currency',
};

export const initialValues = {
  [beautyValuesNames.procedures]: '',
  [beautyValuesNames.currency]: '',
};

export const validationSchemaPlan = {
  [beautyValuesNames.procedures]: validationSchema.arrayNumbers,
  [beautyValuesNames.currency]: validationSchema.default,
};

export const proceduresNamesData = {
  FaceMasks: 'FaceMasks',
  SkinExfoliation: 'SkinExfoliation',
  Manicure: 'Manicure',
  Pedicure: 'Pedicure',
  HairRemoval: 'HairRemoval',
  BodyMassage: 'BodyMassage',
  Microblading: 'Microblading',
  DeepFacialCleansing: 'DeepFacialCleansing',
  NailExtensions: 'NailExtensions',
  HairLamination: 'HairLamination',
  TeethWhitening: 'TeethWhitening',
  AntiCelluliteTreatments: 'AntiCelluliteTreatments',
  SpaTreatments: 'SpaTreatments',
  SelfTanning: 'SelfTanning',
  Cryotherapy: 'Cryotherapy',
  Haircut: 'Haircut',
  EyebrowEyelashLamination: 'EyebrowEyelashLamination',
  LymphaticDrainageMassage: 'LymphaticDrainageMassage',
  LaserHairRemoval: 'LaserHairRemoval',
  Hydromassage: 'Hydromassage',
};

export const proceduresNames = {
  [proceduresNamesData.FaceMasks]: 'Face masks',
  [proceduresNamesData.SkinExfoliation]: 'Skin exfoliation',
  [proceduresNamesData.Manicure]: 'Manicure',
  [proceduresNamesData.Pedicure]: 'Pedicure',
  [proceduresNamesData.HairRemoval]: 'Hair removal',
  [proceduresNamesData.BodyMassage]: 'Body massage',
  [proceduresNamesData.Microblading]: 'Microblading (eyebrows)',
  [proceduresNamesData.DeepFacialCleansing]: 'Deep facial cleansing',
  [proceduresNamesData.NailExtensions]: 'Nail extensions',
  [proceduresNamesData.HairLamination]: 'Hair lamination',
  [proceduresNamesData.TeethWhitening]: 'Teeth whitening',
  [proceduresNamesData.AntiCelluliteTreatments]: 'Anti-cellulite treatments',
  [proceduresNamesData.SpaTreatments]: 'Spa treatments',
  [proceduresNamesData.SelfTanning]: 'Self-tanning',
  [proceduresNamesData.Cryotherapy]: 'Cryotherapy',
  [proceduresNamesData.Haircut]: 'Haircut',
  [proceduresNamesData.EyebrowEyelashLamination]:
    'Lamination of eyebrows and eyelashes',
  [proceduresNamesData.LymphaticDrainageMassage]: 'Lymphatic drainage massage',
  [proceduresNamesData.LaserHairRemoval]: 'Laser hair removal',
  [proceduresNamesData.Hydromassage]: 'Hydromassage',
};

export const proceduresSelectData = [
  {
    id: 1,
    enumValue: 2,
    title: proceduresNames[proceduresNamesData.FaceMasks],
    value: proceduresNamesData.FaceMasks,
  },
  {
    id: 2,
    enumValue: 3,
    title: proceduresNames[proceduresNamesData.SkinExfoliation],
    value: proceduresNamesData.SkinExfoliation,
  },
  {
    id: 3,
    enumValue: 4,
    title: proceduresNames[proceduresNamesData.Manicure],
    value: proceduresNamesData.Manicure,
  },
  {
    id: 4,
    enumValue: 5,
    title: proceduresNames[proceduresNamesData.Pedicure],
    value: proceduresNamesData.Pedicure,
  },
  {
    id: 5,
    enumValue: 6,
    title: proceduresNames[proceduresNamesData.HairRemoval],
    value: proceduresNamesData.HairRemoval,
  },
  {
    id: 6,
    enumValue: 7,
    title: proceduresNames[proceduresNamesData.BodyMassage],
    value: proceduresNamesData.BodyMassage,
  },
  {
    id: 7,
    enumValue: 18,
    title: proceduresNames[proceduresNamesData.Microblading],
    value: proceduresNamesData.Microblading,
  },
  {
    id: 8,
    enumValue: 9,
    title: proceduresNames[proceduresNamesData.DeepFacialCleansing],
    value: proceduresNamesData.DeepFacialCleansing,
  },
  {
    id: 9,
    enumValue: 10,
    title: proceduresNames[proceduresNamesData.NailExtensions],
    value: proceduresNamesData.NailExtensions,
  },
  {
    id: 10,
    enumValue: 11,
    title: proceduresNames[proceduresNamesData.HairLamination],
    value: proceduresNamesData.HairLamination,
  },
  {
    id: 11,
    enumValue: 13,
    title: proceduresNames[proceduresNamesData.TeethWhitening],
    value: proceduresNamesData.TeethWhitening,
  },
  {
    id: 12,
    enumValue: 14,
    title: proceduresNames[proceduresNamesData.AntiCelluliteTreatments],
    value: proceduresNamesData.AntiCelluliteTreatments,
  },
  {
    id: 13,
    enumValue: 15,
    title: proceduresNames[proceduresNamesData.SpaTreatments],
    value: proceduresNamesData.SpaTreatments,
  },
  {
    id: 14,
    enumValue: 16,
    title: proceduresNames[proceduresNamesData.SelfTanning],
    value: proceduresNamesData.SelfTanning,
  },
  {
    id: 15,
    enumValue: 19,
    title: proceduresNames[proceduresNamesData.Cryotherapy],
    value: proceduresNamesData.Cryotherapy,
  },
  {
    id: 16,
    enumValue: 8,
    title: proceduresNames[proceduresNamesData.Haircut],
    value: proceduresNamesData.Haircut,
  },
  {
    id: 17,
    enumValue: 21,
    title: proceduresNames[proceduresNamesData.EyebrowEyelashLamination],
    value: proceduresNamesData.EyebrowEyelashLamination,
  },
  {
    id: 18,
    enumValue: 12,
    title: proceduresNames[proceduresNamesData.LymphaticDrainageMassage],
    value: proceduresNamesData.LymphaticDrainageMassage,
  },
  {
    id: 19,
    enumValue: 17,
    title: proceduresNames[proceduresNamesData.LaserHairRemoval],
    value: proceduresNamesData.LaserHairRemoval,
  },
  {
    id: 20,
    enumValue: 20,
    title: proceduresNames[proceduresNamesData.Hydromassage],
    value: proceduresNamesData.Hydromassage,
  },
];

export const priceInput = {
  placeholder: 'Price',
  fieldType: fieldTypes.text,
  isSquare: true,
  isNumber: true,
};

export const lastDateInput = {
  placeholder: 'Last time',
  fieldType: fieldTypes.date,
};

export const nextDateInput = {
  fieldType: fieldTypes.date,
  icon: CalendarIcon,
};

export const proceduresSteps = {
  [proceduresNamesData.FaceMasks]: {
    enumValue: 2,
    step: 1,
    minValue: 1,
    maxValue: 30,
    type: beautyRangeTypes.days,
    recommended: [3, 7],
    title: 'How often do you get a face masks?',
  },
  [proceduresNamesData.SkinExfoliation]: {
    enumValue: 3,
    step: 1,
    minValue: 1,
    maxValue: 30,
    type: beautyRangeTypes.days,
    recommended: [6, 7],
    title: 'How often do you get a skin exfoliation?',
  },
  [proceduresNamesData.Manicure]: {
    enumValue: 4,
    step: 1,
    minValue: 1,
    maxValue: 30,
    type: beautyRangeTypes.days,
    recommended: [14, 28],
    title: 'How often do you get a manicure?',
  },
  [proceduresNamesData.Pedicure]: {
    enumValue: 5,
    step: 1,
    minValue: 1,
    maxValue: 9,
    type: beautyRangeTypes.weeks,
    recommended: [4, 6],
    title: 'How often do you get a pedicure?',
  },
  [proceduresNamesData.HairRemoval]: {
    enumValue: 6,
    step: 1,
    minValue: 1,
    maxValue: 9,
    type: beautyRangeTypes.weeks,
    recommended: [4, 6],
    title: 'How often do you get a hair removal?',
  },
  [proceduresNamesData.BodyMassage]: {
    enumValue: 7,
    step: 1,
    minValue: 1,
    maxValue: 9,
    type: beautyRangeTypes.weeks,
    recommended: [3, 5],
    title: 'How often do you get a body massage?',
  },
  [proceduresNamesData.Microblading]: {
    enumValue: 18,
    step: 1,
    minValue: 1,
    maxValue: 25,
    type: beautyRangeTypes.months,
    recommended: [12, 24],
    title: 'How often do you get a microblading?',
  },
  [proceduresNamesData.DeepFacialCleansing]: {
    enumValue: 9,
    step: 1,
    minValue: 1,
    maxValue: 9,
    type: beautyRangeTypes.weeks,
    recommended: [3, 4],
    title: 'How often do you get a deep facial cleansing?',
  },
  [proceduresNamesData.NailExtensions]: {
    enumValue: 10,
    step: 1,
    minValue: 1,
    maxValue: 9,
    type: beautyRangeTypes.weeks,
    recommended: [4, 6],
    title: 'How often do you get a nail extensions?',
  },
  [proceduresNamesData.HairLamination]: {
    enumValue: 11,
    step: 1,
    minValue: 1,
    maxValue: 9,
    type: beautyRangeTypes.weeks,
    recommended: [6, 7],
    title: 'How often do you get a hair lamination?',
  },
  [proceduresNamesData.TeethWhitening]: {
    enumValue: 13,
    step: 1,
    minValue: 1,
    maxValue: 13,
    type: beautyRangeTypes.months,
    recommended: [6, 12],
    title: 'How often do you get a teeth whitening?',
  },
  [proceduresNamesData.AntiCelluliteTreatments]: {
    enumValue: 14,
    step: 1,
    minValue: 1,
    maxValue: 6,
    type: beautyRangeTypes.weeks,
    recommended: [4, 5],
    title: 'How often do you get the anti-cellulite treatments?',
  },
  [proceduresNamesData.SpaTreatments]: {
    enumValue: 15,
    step: 1,
    minValue: 1,
    maxValue: 6,
    type: beautyRangeTypes.weeks,
    recommended: [4, 5],
    title: 'How often do you get the spa treatments?',
  },
  [proceduresNamesData.SelfTanning]: {
    enumValue: 16,
    step: 1,
    minValue: 1,
    maxValue: 30,
    type: beautyRangeTypes.days,
    recommended: [10, 14],
    title: 'How often do you get a self-tanning?',
  },
  [proceduresNamesData.Cryotherapy]: {
    enumValue: 19,
    step: 1,
    minValue: 1,
    maxValue: 6,
    type: beautyRangeTypes.weeks,
    recommended: [4, 5],
    title: 'How often do you get a cryotherapy?',
  },
  [proceduresNamesData.Haircut]: {
    enumValue: 8,
    step: 1,
    minValue: 1,
    maxValue: 9,
    type: beautyRangeTypes.weeks,
    recommended: [6, 8],
    title: 'How often do you get a haircut?',
  },
  [proceduresNamesData.LymphaticDrainageMassage]: {
    enumValue: 21,
    step: 1,
    minValue: 1,
    maxValue: 9,
    type: beautyRangeTypes.weeks,
    recommended: [6, 8],
    title: 'How often do you get a lymphatic drainage massage?',
  },
  [proceduresNamesData.EyebrowEyelashLamination]: {
    enumValue: 12,
    step: 1,
    minValue: 1,
    maxValue: 9,
    type: beautyRangeTypes.weeks,
    recommended: [6, 8],
    title: 'How often do you get a lamination of eyebrows and eyelashes?',
  },
  [proceduresNamesData.LaserHairRemoval]: {
    enumValue: 17,
    step: 1,
    minValue: 1,
    maxValue: 9,
    type: beautyRangeTypes.weeks,
    recommended: [4, 6],
    title: 'How often do you get a laser hair removal?',
  },
  [proceduresNamesData.Hydromassage]: {
    enumValue: 20,
    step: 1,
    minValue: 1,
    maxValue: 6,
    type: beautyRangeTypes.weeks,
    recommended: [4, 5],
    title: 'How often do you get a hydromassage?',
  },
};

export const proceduresNextDate = {
  [proceduresNamesData.FaceMasks]: {
    title: 'Next face masks',
  },
  [proceduresNamesData.SkinExfoliation]: {
    title: 'Next skin exfoliation',
  },
  [proceduresNamesData.Manicure]: {
    title: 'Next manicure',
  },
  [proceduresNamesData.Pedicure]: {
    title: 'Next pedicure',
  },
  [proceduresNamesData.HairRemoval]: {
    title: 'Next hair removal',
  },
  [proceduresNamesData.BodyMassage]: {
    title: 'Next body massage',
  },
  [proceduresNamesData.Microblading]: {
    title: 'Next microblading',
  },
  [proceduresNamesData.DeepFacialCleansing]: {
    title: 'Next deep facial cleansing',
  },
  [proceduresNamesData.NailExtensions]: {
    title: 'Next nail extensions',
  },
  [proceduresNamesData.HairLamination]: {
    title: 'Next hair lamination',
  },
  [proceduresNamesData.TeethWhitening]: {
    title: 'Next teeth whitening',
  },
  [proceduresNamesData.AntiCelluliteTreatments]: {
    title: 'Next anti-cellulite treatments',
  },
  [proceduresNamesData.SpaTreatments]: {
    title: 'Next spa treatments',
  },
  [proceduresNamesData.SelfTanning]: {
    title: 'Next self-tanning',
  },
  [proceduresNamesData.Cryotherapy]: {
    title: 'Next cryotherapy',
  },
  [proceduresNamesData.Haircut]: {
    title: 'Next haircut',
  },
  [proceduresNamesData.LymphaticDrainageMassage]: {
    title: 'Next lymphatic drainage massage',
  },
  [proceduresNamesData.EyebrowEyelashLamination]: {
    title: 'Next lamination of eyebrows and eyelashes',
  },
  [proceduresNamesData.LaserHairRemoval]: {
    title: 'Next laser hair removal',
  },
  [proceduresNamesData.Hydromassage]: {
    title: 'Next hydromassage',
  },
};

export const mock = [
  /* {
    id: 1,
    component: {
      isComponent: true,
      componentCard: WelcomePlanCard,
    },
  }, */
  {
    id: 1,
    inputs: [
      {
        id: 1,
        name: beautyValuesNames.procedures,
        fieldType: fieldTypes.radioListMulti,
        radioList: proceduresSelectData,
        radioListStyle: {
          textStyle: { ...textStyles.medium, color: colors.secondPurpleColor },
          textColorSelected: colors.whiteColor,
          bgColor: colors.radioItemBg,
          bgColorSelected: colors.secondPurpleColor,
        },
      },
      {
        id: 2,
        placeholder: 'Currency',
        name: beautyValuesNames.currency,
        defaultValue: currencies[0],
        fieldType: fieldTypes.select,
        selectData: currencies,
        icon: Wallet,
        subtitle: 'Choose your currency',
        subtitleStylesText: { textAlign: 'center' },
      },
    ],
    component: {
      componentCard: BeautyPlanCard,
      title: 'How do you take care of yourself?',
    },
  },
  {
    id: 2,
    component: {
      componentCard: BeautyPlanRangeCard,
    },
  },
  {
    id: 3,
    inputs: [
      {
        id: 3,
        placeholder: 'Budget',
        name: 'monthlyBudget',
        fieldType: fieldTypes.text,
        icon: Wallet,
        isReadOnly: true,
        subtitle: 'Your estimated monthly budget',
        subtitleStyles: { width: '100%' },
        subtitleStylesText: { textAlign: 'center', fontSize: 18 },
      },
    ],
    component: {
      componentCard: BeautyPlanDateCard,
    },
  },
];
