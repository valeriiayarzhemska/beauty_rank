import { useState } from 'react';
import {
  Keyboard,
  Linking,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectBeautyPlanValues,
  selectRegistrationQuizValues,
  selectShareInstagramValues,
} from '../../store/redux/features/dashboard/dashboardSelectors';
import { setUser } from '../../store/redux/features/auth/authSlice';
import { setPhotoToAnalize } from '../../store/redux/features/dashboard/dashboardSlice';
import { useRegisterWithQuizMutation } from '../../store/redux/services/user/userApi';

import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { ButtonTextComponent } from '../../components/ui/buttons/ButtonTextComponent';
import { LogoTitle } from '../../components/LogoTitle';
import { RegistrationForm } from '../../components/ui/forms/RegistrationForm';
import { AuthButtons } from '../../components/ui/AuthButtons';
import { TextComponent } from '../../components/ui/TextComponent';

import { textStyles } from '../../constants/constantsStyle';
import { colors, termsLinks } from '../../constants/constants';
import { beautyValuesNames } from '../../store/mocks/beauty-plan-quiz-mock';
import { valuesNames } from '../../store/mocks/registration-quiz-mock';
import { transformBeautyPlanValues } from '../../utils/utilsData';
import { errorMessages } from '../../constants/constantsUI';

import { styles } from './style';

export const Registration = ({ navigation, route }) => {
  const stylesSchema = styles();

  const isBackButton = route?.params?.isNoBackButton ? false : true;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const [register, { isFetching, error: registerError }] =
    useRegisterWithQuizMutation();

  const quizValues = useSelector(selectRegistrationQuizValues) || {};
  const beautyValues = useSelector(selectBeautyPlanValues) || {};
  const instagramValues = useSelector(selectShareInstagramValues) || {};

  const handleLinkPress = () => {
    Keyboard.dismiss();
    Linking.openURL(termsLinks.terms);
  };

  const generateFormValues = () => {
    const beautyPlanValues = beautyValues?.[beautyValuesNames.procedures]
      ? {
          procedures: transformBeautyPlanValues(beautyValues),
        }
      : {};
    const questionnaireValues = {
      Questionnaire: {
        ...quizValues,
        ...instagramValues,
        [valuesNames.Age]: Number(quizValues.Age),
      },
    };

    return { beautyPlanValues, questionnaireValues };
  };

  const registerUser = async ({ registerValues, email, provider }) => {
    const newValues = email
      ? {
          ...registerValues,
          User: { ...registerValues.User, provider: 'email' },
        }
      : { ...registerValues };

    const response = await register(newValues);

    if (response?.error) {
      setError(response?.error?.data?.message || errorMessages.wentWrong);
      setIsLoading(false);
    } else {
      await dispatch(setPhotoToAnalize(null));

      if (email) {
        await dispatch(setUser({ email }));
      } else {
        await dispatch(setUser({ provider }));
      }

      setIsLoading(false);

      await navigation.navigate('UploadAnalizePhoto');
    }
  };

  return (
    <BackgroundWrapper
      isBackButton={isBackButton}
      color={colors.purpleBgColor}
      colorBackButton={colors.lightVioletColor}
      navigation={navigation}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={stylesSchema.scrollView}
        keyboardShouldPersistTaps="handled"
      >
        <LogoTitle
          size={120}
          title={'Sign up'}
        />

        <RegistrationForm
          navigation={navigation}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          error={error}
          setError={setError}
          registerUser={registerUser}
          generateFormValues={generateFormValues}
        />

        <AuthButtons
          marginTop={20}
          marginBottom={20}
          title={'Or Sign Up with'}
          isRegistration={true}
          setIsLoading={setIsLoading}
          registerUser={registerUser}
          generateFormValues={generateFormValues}
        />

        <View style={stylesSchema.signUpContainer}>
          <TextComponent>Have an account?</TextComponent>

          <ButtonTextComponent
            text="Sign in"
            handleClick={() => navigation.navigate('Login')}
          />
        </View>

        <TouchableWithoutFeedback onPress={handleLinkPress}>
          <View style={stylesSchema.info}>
            <TextComponent
              styles={{ ...textStyles.regular, textAlign: 'center' }}
            >
              Using this application, you agree to our
              <Text
                maxFontSizeMultiplier={1}
                style={stylesSchema.textLink}
              >
                {' terms of service'}
              </Text>
              , including that the advice provided in the application does not
              replace professional consultations.
            </TextComponent>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </BackgroundWrapper>
  );
};
