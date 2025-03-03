import { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import {
  setIsSkipVisible,
  setShareInstagramValues,
} from '../../../../store/redux/features/dashboard/dashboardSlice';

import { FormTemplate } from '../FormTemplate';
import { BackButton } from '../../buttons/BackButton';
import { ProgressBarComponent } from '../../ProgressBar';
import { QuizContainer } from '../../../quiz/QuizContainer';

import {
  initialValues,
  validationSchemaInstagram,
} from '../../../../store/mocks/share-instagram-mock';
import { handleLoaderProgress } from '../../../../utils/utils';

import { styles } from './style';

export const ShareInstagramForm = ({
  navigation,
  mock = [],
  isSkipClicked,
  setIsSkipClicked,
  setIsSkipButtonVisible,
}) => {
  const backButtonRef = useRef(null);

  const progressStep = 0.5;
  const [progress, setProgress] = useState(progressStep);

  const stylesSchema = styles();

  const dispatch = useDispatch();

  const handleProgress = (isGoing, id) => {
    if (id !== 2) {
      setIsSkipButtonVisible(false);

      handleLoaderProgress({
        setProgress,
        isGoing,
        count: progressStep,
        length: 2,
        id,
      });
    }
  };

  const handleSubmit = formProps => {
    dispatch(setShareInstagramValues(formProps?.values));

    navigation.navigate('WelcomeResult');
  };

  const handleSkipClick = () => {
    if (isSkipClicked) {
      dispatch(setShareInstagramValues({}));
      setIsSkipClicked(false);
    }
  };

  const handleBackClick = () => {
    if (progress > progressStep) {
      backButtonRef?.current?.handleBackClick();
      dispatch(setIsSkipVisible(true));

      return;
    } else {
      navigation.pop();
    }
  };

  useEffect(() => {
    handleSkipClick();
  }, [isSkipClicked]);

  return (
    <View style={stylesSchema.container}>
      <BackButton
        handleBackClick={handleBackClick}
        navigation={navigation}
      />

      <View>
        <ProgressBarComponent progress={progress} />
      </View>

      <FormTemplate
        initialValues={initialValues}
        validationSchema={Yup.object(validationSchemaInstagram)}
        handleSubmitForm={handleSubmit}
        isWithoutButton={true}
      >
        {formProps => (
          <>
            <QuizContainer
              navigation={navigation}
              formProps={formProps}
              data={mock}
              maxVisibleItems={2}
              handleProgress={handleProgress}
              cardHeight={512}
              handleSubmit={handleSubmit}
              backButtonRef={backButtonRef}
            />
          </>
        )}
      </FormTemplate>
    </View>
  );
};
