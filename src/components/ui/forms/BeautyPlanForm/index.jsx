import { useEffect, useRef, useState } from 'react';
import { useWindowDimensions, View } from 'react-native';
import * as Yup from 'yup';

import { useGetAccountProceduresQuery } from '../../../../store/redux/services/user/userApi';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from '../../../../store/redux/features/auth/authSelectors';
import { setProceduresFromBack } from '../../../../store/redux/features/dashboard/dashboardSlice';

import { FormTemplate } from '../FormTemplate';
import { BackButton } from '../../buttons/BackButton';
import { ProgressBarComponent } from '../../ProgressBar';
import { QuizContainer } from '../../../quiz/QuizContainer';
import { Loader } from '../../Loader';

import {
  beautyValuesNames,
  initialValues,
  mock,
  proceduresSelectData,
  validationSchemaPlan,
} from '../../../../store/mocks/beauty-plan-quiz-mock';
import { handleLoaderProgress } from '../../../../utils/utils';
import { cardHeights } from '../../../../constants/constants';
import {
  updateProcedureInitialValues,
  updateProcedureMock,
} from '../../../../utils/utilsData';

import { styles } from './style';

export const BeautyPlanForm = ({ navigation, hasProgressBar = true }) => {
  const stylesSchema = styles();

  const { scale } = useWindowDimensions();

  const [inputs, setInputs] = useState(mock);
  const [newInitialValues, setnewInitialValues] = useState({
    ...initialValues,
  });
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const userToken = useSelector(selectToken);
  const {
    data,
    isFetching: isProceduresFetching,
    error: proceduresError,
    refetch,
  } = useGetAccountProceduresQuery(
    { token: userToken },
    {
      skip: !userToken || hasProgressBar,
      refetchOnMountOrArgChange: true,
    }
  );
  const scaleHeight =
    scale > 2.9 ? cardHeights.beautyPlanScale : cardHeights.beautyPlan;
  const cardHeight = hasProgressBar ? scaleHeight : scaleHeight - 44;

  const backButtonRef = useRef(null);

  const progressStep = 0.35;
  const [progress, setProgress] = useState(progressStep);

  const handleProgress = isGoing => {
    handleLoaderProgress({
      setProgress,
      isGoing,
      count: progressStep,
      length: 3,
    });
  };

  const handleBackClick = () => {
    backButtonRef?.current?.handleBackClick();
  };

  const handleSubmit = async values => {};

  const updateValues = () => {
    if (data?.length > 0) {
      // to finish in future need to create custom type 1
      const newProcedures = data.filter(
        procedure =>
          procedure?.date &&
          procedure?.frequency &&
          Number(procedure?.type) !== 1
      );

      /* const newProcedures = [
        {
          id: 1,
          type: 2,
          date: '2024-12-24T00:16:19.9684529',
          beautyProcedureName: 'Face masks',
          price: 10,
          frequency: 7,
          currency: 'usd',
        },
        {
          id: 2,
          type: 11,
          date: '2024-12-24T00:16:20.0677979',
          beautyProcedureName: 'Hair lamination',
          price: 20,
          frequency: 21,
          currency: 'usd',
        },
        {
          id: 3,
          type: 18,
          date: '2024-12-24T00:16:20.1118586',
          beautyProcedureName: 'Microblading (eyebrows)',
          price: 30,
          frequency: 60,
          currency: 'usd',
        },
      ]; */
      const updatedInitialValues = updateProcedureInitialValues(
        newProcedures,
        proceduresSelectData
      );
      const updatedMock = updateProcedureMock(mock, newProcedures);

      setInputs(updatedMock);
      setnewInitialValues(prevValues => ({
        ...prevValues,
        [beautyValuesNames.currency]: newProcedures?.[0]?.currency || '',
        [beautyValuesNames.procedures]:
          updatedInitialValues.updatedInitialValues,
      }));

      dispatch(
        setProceduresFromBack(updatedInitialValues.updatedProceduresValues)
      );
    } else {
      dispatch(setProceduresFromBack({}));
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (!isProceduresFetching && !hasProgressBar) {
      updateValues();
    }

    if (hasProgressBar) {
      setIsLoading(false);
    }
  }, [data, isProceduresFetching]);

  return (
    <View style={stylesSchema.container}>
      <BackButton
        handleBackClick={progress > progressStep ? handleBackClick : false}
        navigation={navigation}
      />

      {hasProgressBar && (
        <View>
          <ProgressBarComponent progress={progress} />
        </View>
      )}

      {isLoading ? (
        <View style={stylesSchema.loader}>
          <Loader />
        </View>
      ) : (
        <FormTemplate
          initialValues={newInitialValues}
          handleSubmitForm={handleSubmit}
          isWithoutButton={true}
          validationSchema={Yup.object(validationSchemaPlan)}
        >
          {formProps => (
            <QuizContainer
              navigation={navigation}
              formProps={formProps}
              data={inputs}
              maxVisibleItems={3}
              handleProgress={handleProgress}
              cardHeight={cardHeight}
              progress={progress}
              backButtonRef={backButtonRef}
            />
          )}
        </FormTemplate>
      )}
    </View>
  );
};
