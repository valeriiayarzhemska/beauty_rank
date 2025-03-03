import { useEffect, useRef, useState } from 'react';
import { useWindowDimensions, View } from 'react-native';
import * as Yup from 'yup';

import { useGetAccountProceduresQuery } from '../../../../store/redux/services/user/userApi';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from '../../../../store/redux/features/auth/authSelectors';

import { FormTemplate } from '../FormTemplate';
import { BackButton } from '../../buttons/BackButton';
import { ProgressBarComponent } from '../../ProgressBar';
import { QuizContainer } from '../../../quiz/QuizContainer';
import { Loader } from '../../Loader';

import {
  initialValues,
  mock,
  validationSchemaWelcome,
} from '../../../../store/mocks/welcome-screens-mock';
import { handleLoaderProgress } from '../../../../utils/utils';
import { cardHeights } from '../../../../constants/constants';

import { styles } from './style';

export const WelcomeScreensForm = ({ navigation }) => {
  const stylesSchema = styles();

  const { scale } = useWindowDimensions();

  const cardHeight =
    scale > 2.9 ? cardHeights.beautyPlanScale : cardHeights.beautyPlan;

  const backButtonRef = useRef(null);

  const progressStep = 0.5;
  const [progress, setProgress] = useState(progressStep);

  const handleProgress = isGoing => {
    handleLoaderProgress({
      setProgress,
      isGoing,
      count: progressStep,
      length: 2,
    });
  };

  const handleBackClick = () => {
    backButtonRef?.current?.handleBackClick();
  };

  const handleSubmit = async values => {};

  return (
    <View style={stylesSchema.container}>
      <BackButton
        handleBackClick={progress > progressStep ? handleBackClick : false}
        navigation={navigation}
      />

      <FormTemplate
        initialValues={initialValues}
        handleSubmitForm={handleSubmit}
        isWithoutButton={true}
        validationSchema={Yup.object(validationSchemaWelcome)}
      >
        {formProps => (
          <QuizContainer
            formProps={formProps}
            navigation={navigation}
            data={mock}
            maxVisibleItems={2}
            handleProgress={handleProgress}
            cardHeight={cardHeight}
            progress={progress}
            backButtonRef={backButtonRef}
          />
        )}
      </FormTemplate>
    </View>
  );
};
