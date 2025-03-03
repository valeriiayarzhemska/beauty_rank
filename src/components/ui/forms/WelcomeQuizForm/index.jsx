import { useRef, useState } from 'react';
import { View } from 'react-native';
import * as Yup from 'yup';

import { FormTemplate } from '../FormTemplate';
import { BackButton } from '../../buttons/BackButton';
import { WelcomeQuizCard } from '../../../quiz/WelcomeQuizCard';
import { ProgressBarComponent } from '../../ProgressBar';
import { QuizContainer } from '../../../quiz/QuizContainer';
import { TextComponent } from '../../TextComponent';

import {
  initialValues,
  mock,
  validationSchemaQuiz,
} from '../../../../store/mocks/registration-quiz-mock';
import { textStyles } from '../../../../constants/constantsStyle';
import { cardHeights, colors } from '../../../../constants/constants';
import { handleLoaderProgress } from '../../../../utils/utils';

import { styles } from './style';

export const WelcomeQuizForm = ({ navigation }) => {
  const stylesSchema = styles();

  const backButtonRef = useRef(null);

  const [progress, setProgress] = useState(0.2);
  const [progressIndex, setProgressIndex] = useState(1);

  const handleProgress = (isGoing, id) => {
    handleLoaderProgress({
      setProgress,
      setProgressIndex,
      isGoing,
      count: 0.2,
      length: 5,
      id,
    });
  };

  const handleBackClick = () => {
    backButtonRef?.current?.handleBackClick();
  };

  const handleSubmit = () => {};

  return (
    <View style={stylesSchema.container}>
      <BackButton
        handleBackClick={progressIndex > 1 ? handleBackClick : false}
        navigation={navigation}
      />

      <View style={stylesSchema.loader}>
        <TextComponent
          styles={{
            ...textStyles.bold,
            fontSize: 18,
            color: colors.whiteColor,
          }}
        >{`Question ${progressIndex} / 5`}</TextComponent>

        <ProgressBarComponent progress={progress} />
      </View>

      <FormTemplate
        initialValues={initialValues}
        validationSchema={Yup.object(validationSchemaQuiz)}
        handleSubmitForm={handleSubmit}
        isWithoutButton={true}
        validateOnBlur={true}
        validateOnChange={false}
      >
        {formProps => (
          <QuizContainer
            navigation={navigation}
            formProps={formProps}
            data={mock}
            maxVisibleItems={3}
            handleProgress={handleProgress}
            componentCard={WelcomeQuizCard}
            cardHeight={cardHeights.welcomeQuizForm}
            backButtonRef={backButtonRef}
          />
        )}
      </FormTemplate>
    </View>
  );
};
