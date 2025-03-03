import { useCallback, useEffect, useMemo, useState } from 'react';
import { ScrollView, useWindowDimensions, View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectHasRanges,
  selectInputsProcedures,
  selectIsUserWoman,
  selectProceduresFromBack,
} from '../../../store/redux/features/dashboard/dashboardSelectors';
import { setBeautyPlanValues } from '../../../store/redux/features/dashboard/dashboardSlice';
import {
  useCreateAccountProceduresMutation,
  useDeleteAccountProceduresMutation,
  useEditAccountProceduresMutation,
} from '../../../store/redux/services/user/userApi';
import {
  selectToken,
  selectIsFullyRegistred,
} from '../../../store/redux/features/auth/authSelectors';

import { TextComponent } from '../../ui/TextComponent';
import { InputsTemplate } from '../../ui/inputs/InputsTemplate';
import { Loader } from '../../ui/Loader';
import { InputLabel } from '../../ui/inputs/InputLabel';
import { InputDate } from '../../ui/inputs/InputDate';
import { ButtonNext } from '../ButtonNext';
import { ErrorMessage } from '../../ErrorMessage';

import {
  nextDateInput,
  proceduresNextDate,
  proceduresSteps,
} from '../../../store/mocks/beauty-plan-quiz-mock';
import { textStyles } from '../../../constants/constantsStyle';
import {
  createBeautyDateMock,
  transformEditedProcedures,
} from '../../../utils/utilsData';
import { colors } from '../../../constants/constants';
import { errorMessages } from '../../../constants/constantsUI';

import { styles } from './style';

export const BeautyPlanDateCard = ({
  navigation,
  formProps,
  item,
  isButtonVisible,
}) => {
  const { scale } = useWindowDimensions();

  const { inputs = [] } = item;

  const dispatch = useDispatch();
  const userToken = useSelector(selectToken);
  const proceduresList = useSelector(selectInputsProcedures);
  const hasRanges = useSelector(selectHasRanges);
  const isWoman = useSelector(selectIsUserWoman);
  const isFullyRegistred = useSelector(selectIsFullyRegistred);

  const [color, setColor] = useState(colors.radioItemBg);
  const [inputsDateList, setInputsDateList] = useState([]);
  const [monthlyBudgetInput, setMonthlyBudgetInput] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const stylesSchema = styles(color, scale, isFullyRegistred);

  const proceduresFromBack = useSelector(selectProceduresFromBack);

  const [
    editProcedures,
    { isFetching: isEdititngFetching, error: editingError },
  ] = useEditAccountProceduresMutation();
  const [
    createProcedures,
    { isFetching: isCreatingFetching, error: creatingError },
  ] = useCreateAccountProceduresMutation();
  const [
    deleteProcedures,
    { isFetching: isDeletingFetching, error: deletingError },
  ] = useDeleteAccountProceduresMutation();

  const checkValidation = useMemo(
    () => item.inputs.some(input => !formProps?.values?.[input.name]?.length),
    [item.inputs, formProps]
  );

  const createMock = useCallback(() => {
    const checkRangeInputs = formProps?.values?.[`${proceduresList?.[0]}Range`];

    if (proceduresList?.length > 0 && hasRanges && checkRangeInputs) {
      const newMock = createBeautyDateMock({
        proceduresList,
        proceduresNextDate,
        nextDateInput,
        proceduresSteps,
        formProps,
      });
      const newMonthlyBudget = [
        { ...inputs[0], defaultValue: newMock.monthlyBudget.toString() },
      ];

      setInputsDateList(newMock.inputs);
      setMonthlyBudgetInput(newMonthlyBudget);
    } else {
      setInputsDateList([]);
      setMonthlyBudgetInput(inputs);
    }

    setIsLoading(false);
  }, [proceduresList, hasRanges, formProps?.values]);

  const sendData = async () => {
    setError(null);

    const beautyValues = formProps?.values;
    const data = transformEditedProcedures(beautyValues, proceduresFromBack);

    let response;
    let editResponse;
    let deleteResponse;

    if (data?.newProcedures.length > 0) {
      response = await createProcedures({
        data: data.newProcedures,
        token: userToken,
      });
    }

    if (data?.editedProcedures.length > 0) {
      editResponse = await editProcedures({
        data: data.editedProcedures,
        token: userToken,
      });
    }

    if (data?.deletedProcedures.length > 0) {
      deleteResponse = await deleteProcedures({
        data: data.deletedProcedures,
        token: userToken,
      });
    }

    if (
      response?.error ||
      response?.errors ||
      editResponse?.error ||
      editResponse?.errors ||
      deleteResponse?.error ||
      deleteResponse?.errors
    ) {
      setError(errorMessages.wentWrong);
    } else {
      navigation.navigate('Profile');
    }
  };

  const handleClick = async () => {
    const isValid = formProps?.isValid;

    if (isValid && !isFullyRegistred) {
      await dispatch(setBeautyPlanValues(formProps?.values));
      navigation.navigate('ShareInstagram');
    }

    if (isValid && isFullyRegistred) {
      sendData();
    }
  };

  useEffect(() => {
    if (isWoman) {
      setColor(colors.radioItemBg);
    } else {
      setColor(colors.secondPurpleBgColor);
    }
  }, [isWoman]);

  useEffect(() => {
    createMock();
  }, [proceduresList, hasRanges, createMock]);

  return (
    <>
      <View style={stylesSchema.contentContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={stylesSchema.scrollContainer}
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="always"
          // pointerEvents="box-none"
        >
          {isLoading && <Loader />}

          {inputsDateList &&
            inputsDateList.length > 0 &&
            !isLoading &&
            hasRanges && (
              <View style={stylesSchema.inputContainer}>
                {inputsDateList.map((item, index) => {
                  const { icon, placeholder, name, defaultValue } = item;

                  return (
                    <View
                      style={stylesSchema.container}
                      key={index}
                    >
                      <View style={stylesSchema.halfContainer}>
                        <TextComponent
                          styles={{ ...textStyles.bold, fontSize: 18 }}
                        >
                          {item.title}
                        </TextComponent>
                      </View>

                      <View style={stylesSchema.halfContainer}>
                        <InputDate
                          formProps={formProps}
                          label={InputLabel}
                          icon={icon}
                          placeholder={placeholder}
                          name={name}
                          defaultValue={defaultValue}
                        />
                      </View>
                    </View>
                  );
                })}
              </View>
            )}

          <InputsTemplate
            formProps={formProps}
            inputsList={monthlyBudgetInput}
          />

          {error && <ErrorMessage error={error} />}
        </ScrollView>
      </View>

      {isButtonVisible && (
        <ButtonNext
          handleClick={handleClick}
          checkValidation={checkValidation}
        />
      )}
    </>
  );
};
