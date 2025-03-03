import { beautyRangeTypes } from '../constants/constants';
import {
  beautyValuesNames,
  proceduresNames,
  proceduresSteps,
} from '../store/mocks/beauty-plan-quiz-mock';
import { formatDateForProcedures } from './utils';

export const getBeautyProcedureType = (type, date, daysToAdd) => {
  switch (type) {
    case beautyRangeTypes.weeks:
      date.setDate(date.getDate() + daysToAdd * 7);

      return date;
    case beautyRangeTypes.months:
      const newDate = new Date(date);

      newDate.setMonth(newDate.getMonth() + daysToAdd);

      return newDate;
    case beautyRangeTypes.days:
    default:
      date.setDate(date.getDate() + daysToAdd);

      return date;
  }
};

export const transformBeautyProcedureDays = (type, frequency) => {
  switch (type) {
    case beautyRangeTypes.weeks:
      return Math.trunc(frequency / 7);
    case beautyRangeTypes.months:
      return Math.trunc(frequency / 30);
    case beautyRangeTypes.days:
    default:
      return frequency;
  }
};

export const getBeautyProcedureMonthlyPrice = (type, price, frequency) => {
  switch (type) {
    case beautyRangeTypes.weeks:
      if (frequency / 4 > 1) {
        const monthAmount = (7 * frequency) / 30;

        return price / monthAmount;
      } else {
        const monthlyPrice = (30 / (7 * frequency)) * price;

        return monthlyPrice;
      }
    case beautyRangeTypes.months:
      return price / frequency;
    case beautyRangeTypes.days:
      if (frequency <= 30) {
        const monthlyPrice = (30 / frequency) * price;

        return monthlyPrice;
      } else {
        const monthlyPrice = price / (frequency / 30);

        return monthlyPrice;
      }
    default:
      return price;
  }
};

export const createBeautyDateMock = ({
  proceduresList,
  proceduresNextDate,
  nextDateInput,
  proceduresSteps,
  formProps,
}) => {
  let monthlyBudget = 0;

  const newInputs = proceduresList.map(item => {
    const dateInfo = proceduresNextDate?.[item];

    const rangeValueName = `${item}Range`;
    const lastDateValueName = `${item}LastDate`;
    const priceValueName = `${item}Price`;

    const priceValue = formProps.values[priceValueName];
    const rangeValue = formProps.values[rangeValueName];
    const lastDateValue = formProps.values[lastDateValueName];

    const pricePerMonth = getBeautyProcedureMonthlyPrice(
      proceduresSteps[item].type,
      Number(priceValue),
      Number(rangeValue)
    );
    monthlyBudget += pricePerMonth;

    const defaultValue = lastDateValue
      ? getBeautyProcedureType(
          proceduresSteps[item].type,
          lastDateValue,
          rangeValue
        )
      : '';

    return {
      ...dateInfo,
      defaultValue,
      name: `${item}NextDate`,
      ...nextDateInput,
    };
  });

  return { inputs: newInputs, monthlyBudget: Math.trunc(monthlyBudget) };
};

export const getBeautyProcedureValueType = (type, date) => {
  switch (type) {
    case beautyRangeTypes.weeks:
      return date * 7;
    case beautyRangeTypes.months:
      return date * 30;
    case beautyRangeTypes.days:
    default:
      return date;
  }
};

export const transformBeautyPlanValues = values => {
  const procedures = values[beautyValuesNames.procedures];
  const currency = values[beautyValuesNames.currency];

  const newProcedures = procedures.map(procedure => {
    const frequencyValue = values[`${procedure}Range`];
    const frequency = proceduresSteps?.[procedure]?.type
      ? getBeautyProcedureValueType(
          proceduresSteps?.[procedure]?.type,
          frequencyValue
        )
      : frequencyValue;
    const procedureType = proceduresSteps?.[procedure]?.enumValue
      ? proceduresSteps?.[procedure]?.enumValue
      : 1;
    const procedureName = proceduresNames?.[procedure];

    const newProcedure = {
      price: values[`${procedure}Price`],
      frequency: frequency,
      type: procedureType,
      beautyProcedureName: procedureName ? procedureName : 'Custom',
      date: values[`${procedure}NextDate`],
      lastDate: values[`${procedure}LastDate`],
      currency,
    };

    return newProcedure;
  });

  return newProcedures;
};

export const transformEditedProcedures = (values, proceduresFromBack) => {
  const procedures = values[beautyValuesNames.procedures];
  const currency = values[beautyValuesNames.currency];
  const backendProcedureIds = Object.values(proceduresFromBack).map(
    procedure => procedure.id
  );

  const createdProcedures = [];
  const editedProcedures = [];
  const formProcedureIds = [];

  procedures.map(procedure => {
    const frequencyValue = values[`${procedure}Range`];
    const frequency = proceduresSteps?.[procedure]?.type
      ? getBeautyProcedureValueType(
          proceduresSteps?.[procedure]?.type,
          frequencyValue
        )
      : frequencyValue;
    const procedureType = proceduresSteps?.[procedure]?.enumValue
      ? proceduresSteps?.[procedure]?.enumValue
      : 1;
    const procedureName = proceduresNames?.[procedure];

    const isEdited = proceduresFromBack?.[procedure];
    const valuesFromBack = isEdited
      ? { id: proceduresFromBack?.[procedure]?.id }
      : {};

    const newProcedure = {
      ...valuesFromBack,
      price: values[`${procedure}Price`],
      frequency: frequency,
      type: procedureType,
      beautyProcedureName: procedureName ? procedureName : 'Custom',
      date: values[`${procedure}NextDate`],
      lastDate: values[`${procedure}LastDate`],
      currency,
    };

    if (proceduresFromBack?.[procedure]?.id) {
      formProcedureIds.push(proceduresFromBack[procedure].id);
    }

    if (isEdited) {
      editedProcedures.push(newProcedure);

      return;
    } else {
      createdProcedures.push(newProcedure);

      return;
    }
  });

  const deletedProcedures = backendProcedureIds.filter(
    id => !formProcedureIds.includes(id)
  );[27, 34, 61, 35, 62]

  return {
    newProcedures: createdProcedures,
    editedProcedures,
    deletedProcedures,
  };
};

export const updateProcedureInitialValues = (
  newProcedures,
  proceduresSelectData
) => {
  const updatedInitialValues = [];
  const updatedProceduresValues = {};

  newProcedures.map(procedure => {
    const newProcedure = proceduresSelectData.find(
      procedureSelect => procedureSelect.enumValue === Number(procedure.type)
    );

    if (newProcedure) {
      updatedInitialValues.push(newProcedure.value);
      updatedProceduresValues[newProcedure.value] = procedure;
    }
  });

  return { updatedInitialValues, updatedProceduresValues };
};

export const updateProcedureMock = (mock, newProcedures) => {
  const newMock = mock.map((item, index) => {
    if (index === 0) {
      const newInputs = item.inputs.map(input => {
        if (input.name === beautyValuesNames.procedures) {
          return { ...input, defaultValue: newProcedures };
        } else {
          return input;
        }
      });

      return { ...item, inputs: newInputs };
    } else {
      return item;
    }
  });

  return newMock;
};

export const transformProceduresFromBack = (
  proceduresList,
  proceduresFromBack,
  lastDateInput,
  priceInput
) => {
  return proceduresList.reduce((acc, item) => {
    let priceDefaultValue = false;
    let lastDateDefaultValue = false;

    if (proceduresFromBack?.[item]) {
      priceDefaultValue = proceduresFromBack[item].price;
      lastDateDefaultValue = formatDateForProcedures(
        proceduresFromBack[item].lastDate
      );
    }

    return {
      ...acc,
      [item]: [
        {
          ...priceInput,
          name: `${item}Price`,
          defaultValue: priceDefaultValue,
        },
        {
          ...lastDateInput,
          name: `${item}LastDate`,
          defaultValue: lastDateDefaultValue,
        },
      ],
    };
  }, {});
};
